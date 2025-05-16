import styled from "styled-components";

import logo from "../assets/images/logo.svg";
import { breakpoints } from "../data/variables";

const LogoHolder = styled.strong`
  display: block;
  max-width: 214px;
  width: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    margin-bottom: 30px;
  }
`;

export const Logo = () => {
  return (
    <LogoHolder className="logo">
      <a href="#">
        <img width={214} height={24} src={logo} alt="Expenses Tracker" />
      </a>
    </LogoHolder>
  );
};
