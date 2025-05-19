import { useEffect, lazy, Suspense } from "react";
import { useData } from "./context/DataContex";
import { createGlobalStyle } from "styled-components";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

import { Preloader } from "./components/Preloader.jsx";

// Lazy loading components to optimize performance
const Header = lazy(() => import("./components/Header"));
const Tabs = lazy(() => import("./components/Tabs"));
const LogIn = lazy(() => import("./components/LogIn"));

import "./assets/styles/icomoon.css";
import "./assets/styles/fonts.css";
import "../node_modules/normalize.css";
import {
  fontWeight,
  font,
  colors,
  link,
  breakpoints,
  icons,
  borderRadius,
  heading,
} from "./data/variables.js";
import { generateTransition, resetList } from "./data/helpers";
import { motionAnimation } from "./data/data.js";

// Global styles
const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

.wrapper {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  
  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
}

body {
  min-width: 360px;
  font-family: ${font.family};
  font-size: ${font.size};
  line-height: ${font.lineHeight};
  font-weight: ${font.weight};
  color: ${colors.black};
  background: ${colors.lightBlue};
  position: relative;
  transition: ${generateTransition(["color", "background"])};
  
  &.dark {
    color: ${colors.white};
    background: ${colors.blue900};
  }
  
  &.nav-active {
    @media (max-width: 767px) {
      overflow-y: hidden;
    }
    
    &:before {
      opacity: 0.4;
      visibility: visible;
    }
  }
  
  &.no-transition,
  &.no-transition * {
    transition: none !important;
  }
  
  &.popup-active {
    overflow-y: hidden;
  }
  
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${colors.black};
    opacity: 0;
    visibility: hidden;
    z-index: 1;
    transition: ${generateTransition(["opacity", "visibility"])};
    
    @media (min-width: ${breakpoints.tablet}) {
      content: none;
    }
  }
}

#main {
  flex: 1;
  
  @media (min-width:${breakpoints.tablet}) {
    width: calc(100% - 268px);
  }
}

.container {
  padding: 0 15px;
  margin: 0 auto;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
}

.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  display: block;
}

h3, .h3,
h4, .h4,
h5, .h5,
h6, .h6 {
  font-weight: ${fontWeight.semibold};
}

h1, .h1 {
  font-size: ${heading.h1};
}

h2, .h2 {
  font-size: ${heading.h2};
}

h3, .h3 {
  font-size: ${heading.h3};
}

h4, .h4 {
  font-size: ${heading.h4};
}

h5, .h5 {
  font-size: ${heading.h5};
}

h6, .h6 {
  font-size: ${heading.h6};
}

p {
  margin: 0 0 15px;
}

ul:not([class]):not([id]) {
  ${resetList}
  
  margin-bottom: 30px;
  
  li {
    padding-left: 20px;
    margin-bottom: 10px;
    position: relative;
    
    &:before {
      content: "";
      width: 5px;
      height: 5px;
      position: absolute;
      top: 8px;
      left: 0;
      background: ${colors.blue};
      border-radius: ${borderRadius.rounded};
    }
  }
}

img {
  max-width: 100%;
  height: auto;
}

a {
  color: ${link.color};
  text-decoration: ${link.decoration};
  transition: ${generateTransition(["color"])};
  
  &:hover {
    color: ${link.hoverColor};
  }
}

input[type='button'],
button {
  cursor: pointer;
}

input,
textarea {
  width: 100%;
  height: 50px;
  font-family: ${font.family};
  font-size: ${font.size};
  font-weight: ${fontWeight.semibold};
  padding: 10px 15px;
  color: ${colors.black};
  background: ${colors.white};
  border: 1px solid ${colors.white};
  border-radius: ${borderRadius.base};
  appearance: none;
  transition: ${generateTransition(["border-color", "opacity"])};
  
  .dark & {
    color: ${colors.white};
    background: ${colors.blue700};
    border-color: ${colors.blue700};
  }
  
  &::placeholder {
    font-weight: ${fontWeight.normal};
    color: ${colors.black};
    
    .dark & {
      color: ${colors.white};
    }
  }
  
  &:focus {
    border-color: ${colors.blue};
    box-shadow: none;
    outline: none;
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
    -moz-appearance:textfield;
}

textarea {
  height: 100px;
  resize: none;
}

.form-control {
    margin-bottom: 15px;

    input {
      margin: 0;
    }
  }

.hide {
  opacity: 0;
  visibility: hidden;
}

.tab {
  padding: 15px 0;
  opacity: 0;
  visibility: hidden;
  transition: ${generateTransition(["opacity", "visibility"])};
  
  &.active {
    opacity: 1;
    visibility: visible;
  }
  
  @media (min-width: ${breakpoints.tablet}) {
    padding: 30px 0;
  }
  
  .container {
    @media (min-width: ${breakpoints.widescreen}) {
      padding: 0 30px;
    }
  }
}

.data-block {
  padding: 15px;
  margin-bottom: 15px;
  background: ${colors.white};
  border-radius: ${borderRadius.base};

  @media (min-width: ${breakpoints.desktop}) {
    margin-bottom: 20px;
  }
  
  @media (min-width: ${breakpoints.widescreen}) {
    padding: 30px;
    margin-bottom: 30px;
  }

  .dark & {
    background: ${colors.blue800};
  }
}

.custom-select {
  font-weight: ${fontWeight.semibold};
  margin-bottom: 15px;
  border: 1px solid ${colors.gray};
  border-radius: ${borderRadius.base};
  transition: ${generateTransition(["border-color"])};
  
  .dark & {
    border-color: ${colors.blue700};
  }
  
  .custom-select__control {
    min-height: 50px;
    border-radius: ${borderRadius.base};
    border-width: 0;
    cursor: pointer;
    
    .dark & {
      background: ${colors.blue700};
    }
  }
  
  .custom-select__single-value {
    color: ${colors.black};
    
    .dark & {
      color: ${colors.white};
    }
  }

  .custom-select__indicator-separator {
    display: none;
  }

  .custom-select__placeholder,
  .custom-select__input-container,
  .custom-select__indicator.custom-select__dropdown-indicator {
    color: ${colors.black};
    
    .dark & {
      color:${colors.white};
    }
  }

  .custom-select__value-container,
  .custom-select__indicator.custom-select__dropdown-indicator,
  .custom-select__option {
    padding: 10px 15px;
  }
  
  .custom-select__indicator.custom-select__dropdown-indicator {
    padding-right: 11px;
  }
  
  .custom-select__indicator.custom-select__dropdown-indicator {
    .dark & {
      color:${colors.blue};
    }
  }

  .custom-select__option {
    transition: ${generateTransition(["color", "background"])};
    cursor: pointer;
  }

  input {
    height: auto;
  }

  .custom-select__menu {
    margin: 0;
    box-shadow: none;
    border-radius: ${borderRadius.base};
    
    .dark & {
      background: ${colors.blue700};
    }
  }

  .custom-select__option--is-focused {
    color: ${colors.white};
    background: ${colors.blue};
  }
}

.icon-products {
  background: ${colors.orange};
  
  &:before {
    content: "${icons.basket}";
  }
}

.icon-cafe {
  background: ${colors.purple};
  
  &:before {
    content: "${icons.store}";
  }
}

.icon-beauty {
  background: ${colors.green};
  
  &:before {
    content: "${icons.heart}";
  }
}

.icon-bills {
  background: ${colors.cyan};
  
  &:before {
    content: "${icons.wifi}";
  }
}

.icon-repair {
  background: ${colors.yellow};
  
  &:before {
    content: "${icons.hanger}";
  }
}

.icon-clothing {
  background: ${colors.lightRed};
  
  &:before {
    content: "${icons.trolley}";
  }
}

.icon-sport {
  background: ${colors.sky};
  
  &:before {
    content: "${icons.ball}";
  }
}

.icon-other {
  background: ${colors.indigo};
  
  &:before {
    content: "${icons.more}";
  }
}

.icon-salary {
  background: ${colors.darkSky};
  
  &:before {
    content: "${icons.briefcase}";
  }
}

.icon-bonus {
  background: ${colors.pink};
  
  &:before {
    content: "${icons.award}";
  }
}

.icon-deposits {
  background: ${colors.darkPurple};
  
  &:before {
    content: "${icons.bank}";
  }
}

.icon-freelance {
  background: ${colors.lightGreen};
  
  &:before {
    content: "${icons.card}";
  }
}

.tab-hidden {
  display: block !important;
  left: -9999px !important;
  position: absolute !important;
  top: -9999px !important;
}
`;

function App() {
  const { isLoggedIn } = useData();
  const { i18n } = useTranslation();

  // Change lang on html
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // Set initial theme from localStorage on app load
  useEffect(() => {
    document.body.classList.add("no-transition");

    const theme = localStorage.getItem("theme") || "light";
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);

    setTimeout(() => {
      document.body.classList.remove("no-transition");
    }, 0);
  }, []);

  return (
    <AnimatePresence mode="sync">
      <GlobalStyle />
      <Suspense key={"lazy"} fallback={<Preloader />}>
        <motion.div
          className="wrapper"
          key={"wrapper"}
          variants={motionAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition="transition"
        >
          {isLoggedIn ? (
            <>
              <Header />
              <main id="main">
                <Tabs />
              </main>
            </>
          ) : (
            <LogIn />
          )}
        </motion.div>
      </Suspense>
    </AnimatePresence>
  );
}

export default App;
