import styled from "styled-components";
import PropTypes from "prop-types";

import { colors, breakpoints } from "../data/variables";
import { generateTransition } from "../data/helpers";

const NavOpenerHolder = styled.button`
  display: block;
  width: 30px;
  height: 28px;
  background: transparent;
  border: none;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }

  &:before,
  &:after,
  span {
    height: 2px;
    position: absolute;
    top: 14px;
    left: 0;
    right: 0;
    background: ${colors.blue};
    transition: ${generateTransition(["all"])};
  }

  &:before,
  &:after {
    content: "";
    top: 6px;
  }

  &:after {
    top: 22px;
  }

  .nav-active & {
    &:after,
    &:before {
      top: 14px;
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }

    span {
      opacity: 0;
    }
  }
`;

export const NavOpener = ({ onClick }) => {
  return (
    <NavOpenerHolder onClick={onClick}>
      <span></span>
    </NavOpenerHolder>
  );
};

NavOpener.propTypes = {
  onClick: PropTypes.func.isRequired,
};
