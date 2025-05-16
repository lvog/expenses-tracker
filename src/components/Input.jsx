import styled from "styled-components";
import PropTypes from "prop-types";

import { colors } from "../data/variables";

const InputHolder = styled.input`
  margin-bottom: 15px;
  border-color: ${colors.gray};

  &.error {
    border-color: ${colors.red};
  }
`;

export const Input = ({
  id,
  type,
  placeholder,
  name,
  handleChange,
  error,
  value,
}) => {
  return (
    <InputHolder
      id={id}
      className={error ? "error" : undefined}
      type={type || "text"}
      placeholder={placeholder}
      name={name}
      onChange={(e) => handleChange(name, e.target.value)}
      value={value}
      autoComplete="off"
    />
  );
};

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  error: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
