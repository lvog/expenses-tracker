import styled from "styled-components";
import { useEffect } from "react";
import { motion } from "framer-motion";

import { Logo } from "./Logo";
import { NavOpener } from "./NavOpener";
import { Nav } from "./Nav";
import { User } from "./User";

import { generateTransition } from "../data/helpers";
import { colors } from "../data/variables";
import { breakpoints } from "../data/variables";
import { motionAnimation } from "../data/data";

const HeaderHolder = styled(motion.header)`
  padding: 15px 0;
  position: relative;
  background: ${colors.white};
  z-index: 2;

  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
    width: 282px;
    padding: 30px 0;
  }

  .dark & {
    background: ${colors.blue800};
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: ${breakpoints.tablet}) {
      flex-direction: column;
    }
  }

  .drop {
    transition: ${generateTransition(["right"])};

    @media (max-width: 767px) {
      height: calc(100vh - 54px);
      width: 250px;
      padding: 30px 15px;
      position: absolute;
      top: 100%;
      right: -250px;
      bottom: 0;
      background: ${colors.white};
    }

    @media (min-width: ${breakpoints.tablet}) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      width: 100%;
    }

    .dark & {
      @media (max-width: 767px) {
        background: ${colors.blue800};
      }
    }

    .nav-active & {
      @media (max-width: 767px) {
        right: 0;
      }
    }

    .user-block {
      @media (min-width: ${breakpoints.tablet}) {
        order: 2;
      }
    }
  }
`;

const Header = () => {
  // Toggle the "nav-active" class to open/close the navigation (drop)
  const toggleNav = () => {
    document.body.classList.toggle("nav-active");
  };

  // Close navigation (drop) when click outside
  useEffect(() => {
    const handleClick = (e) => {
      if (
        document.body.classList.contains("nav-active") &&
        e.target === document.body
      ) {
        document.body.classList.remove("nav-active");
      }
    };

    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <HeaderHolder
      key={"header"}
      variants={motionAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition="transition"
    >
      <div className="container">
        <Logo />
        <NavOpener className="nav-opener" onClick={toggleNav} />
        <div className="drop">
          <User />
          <Nav onClick={toggleNav} />
        </div>
      </div>
    </HeaderHolder>
  );
};

export default Header;
