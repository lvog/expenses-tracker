import { useEffect, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { disableTransition, generateTransition } from "../data/helpers";
import { fontSize, colors, borderRadius } from "../data/variables";

const SwitcherButton = styled.button`
  height: 50px;
  width: 100px;
  padding: 0;
  background: transparent;
  border: 2px solid ${colors.blue};
  border-radius: 25px;
  position: relative;

  &.dark-active {
    &:before {
      left: 50px;
    }
  }

  &:before {
    content: "";
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    background: ${colors.blue};
    border-radius: ${borderRadius.rounded};
    transition: ${generateTransition(["left"])};
  }

  i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: ${fontSize.xl};
    color: ${colors.lightBlue};

    &.icon-sun {
      left: 15px;
    }

    &.icon-moon {
      right: 15px;
    }
  }
`;

export const ThemeSwitcher = () => {
  // State
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const { t } = useTranslation();

  useEffect(() => {
    // Disable CSS transition
    disableTransition();

    // Apply theme class to the body
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }

    // Save current theme in localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="setting-block">
      <h3>{t("settings.theme")}</h3>
      <div className="switcher-holder">
        <SwitcherButton
          onClick={toggleTheme}
          className={theme === "dark" ? "dark-active" : undefined}
        >
          <i className="icon-sun"></i>
          <i className="icon-moon"></i>
        </SwitcherButton>
      </div>
    </div>
  );
};
