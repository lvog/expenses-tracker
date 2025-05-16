import styled from "styled-components";
import PropTypes from "prop-types";

import { fontWeight } from "../data/variables";

const MessageHolder = styled.span`
  display: block;
  font-weight: ${fontWeight.medium};
  color: ${({ $color }) => $color || `inherit`};

  i {
    display: inline-block;
    vertical-align: middle;
    font-size: 120px;
    margin-bottom: 30px;
    opacity: 0.4;
  }
`;

export const Message = ({ children, color }) => {
  return (
    <MessageHolder className="message" $color={color}>
      {children}
    </MessageHolder>
  );
};

Message.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};
