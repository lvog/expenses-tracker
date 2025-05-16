import styled from "styled-components";
import { colors, borderRadius } from "../data/variables";

const PreloaderHolder = styled.div`
  width: 230px;
  height: 230px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 5px solid ${colors.blue};
    border-radius: ${borderRadius.rounded};
    animation: drop 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    animation-delay: 0s;
  }

  &:after {
    animation-delay: 1s;
  }

  @keyframes drop {
    0% {
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      width: 200px;
      height: 200px;
      opacity: 0;
    }
  }
`;

export const Preloader = () => {
  return <PreloaderHolder />;
};
