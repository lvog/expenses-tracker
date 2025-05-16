import styled from "styled-components";
import PropTypes from "prop-types";

import {
  fontSize,
  fontWeight,
  font,
  colors,
  borderRadius,
} from "../data/variables";
import { generateTransition } from "../data/helpers";

const ButtonHolder = styled.button`
  min-width: 138px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${font.family};
  font-size: ${font.size};
  line-height: ${font.lineHeight};
  font-weight: ${fontWeight.medium};
  padding: 15px 18px;
  text-align: center;
  color: ${colors.white};
  background: ${colors.blue};
  border: 1px solid ${colors.blue};
  border-radius: ${borderRadius.base};
  transition: ${generateTransition([
    "color",
    "background",
    "opacity",
    "border-color",
  ])};

  &.btn-outline {
    color: ${colors.blue};
    background: transparent;
    border: 1px solid ${colors.blue};

    &:hover {
      color: ${colors.white};
      background: ${colors.blue};
      border-color: ${colors.blue};
    }
  }

  &:hover {
    background: ${colors.darkBlue};
    border-color: ${colors.darkBlue};
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  i {
    font-size: ${fontSize.lg};
    margin-right: 10px;
  }
`;

export const Button = ({ className, children, disabled, onClick, type }) => {
  return (
    <ButtonHolder
      className={`btn ${className ? className : ""}`}
      type={type || "button"}
      disabled={disabled ?? false}
      onClick={onClick}
    >
      {children}
    </ButtonHolder>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
