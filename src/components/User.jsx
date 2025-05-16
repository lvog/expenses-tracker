import styled from "styled-components";
import PropTypes from "prop-types";

import {
  fontSize,
  fontWeight,
  breakpoints,
  borderRadius,
  colors,
} from "../data/variables";
import { userData } from "../data/data";

const UserHolder = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 30px 15px;

  @media (min-width: ${breakpoints.tablet}) {
    margin: 0 0 15px;
  }

  .image-block {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${fontSize.base};
    font-weight: ${fontWeight.semibold};
    color: ${colors.blue};
    border-radius: ${borderRadius.rounded};
    border: 2px solid ${colors.blue};
    overflow: hidden;

    .dark & {
      color: ${colors.black};
      background: ${colors.blue};
    }
  }

  .info-block {
    width: calc(100% - 36px);
    padding-left: 15px;
  }

  .name,
  .email {
    display: block;
  }

  .name {
    font-size: ${fontSize.md};
  }

  .email {
    font-size: ${fontSize.sm};
    font-weight: ${fontWeight.medium};
  }
`;

const createLogin = (words) => {
  return words
    .split(" ")
    .map((word) => word.slice(0, 1))
    .join("");
};

export const User = () => {
  const { userName, email } = userData;
  return (
    <UserHolder className="user-block">
      <span className="image-block">{createLogin(userName)}</span>
      <div className="info-block">
        <strong className="name">{userName}</strong>
        <span className="email">{email}</span>
      </div>
    </UserHolder>
  );
};

User.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  img: PropTypes.string,
};
