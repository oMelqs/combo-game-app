import styled from "styled-components";

import { defaultTheme } from "@styles/themes";

interface AProps {
  color: keyof typeof defaultTheme.colors;
}

export const A = styled.a<AProps>`
  color: ${(props) => props.theme.colors[props.color]};
  position: relative;
  text-decoration: none;
  transition: color 0.4s ease-out;
  font-weight: 480;
  font-size: 32px;
  margin: 8px;
  min-width: 200px;
  align-items: center;
  justify-content: center;
  display: flex;
  &:hover {
    color: ${defaultTheme.colors.cyan};
    right: 0;
    text-decoration: none;
  }

  &:hover:after {
    border-color: ${defaultTheme.colors.cyan};
    right: 0;
  }

  &:after {
    border-radius: 1em;
    border-top: 0.1em solid ${defaultTheme.colors.cyan};
    content: "";
    position: absolute;
    right: 100%;
    bottom: -8px;
    left: 0;
    transition: right 0.4s cubic-bezier(0, 0.5, 0, 1),
      border-color 0.4s ease-out;
  }

  &:hover:after {
    animation: anchor-underline 2s cubic-bezier(0, 0.5, 0, 1) infinite;
    border-color: ${defaultTheme.colors.cyan};
  }
  @keyframes anchor-underline {
    0%,
    10% {
      left: 0;
      right: 100%;
    }
    40%,
    60% {
      left: 0;
      right: 0;
    }
    90%,
    100% {
      left: 100%;
      right: 0;
    }
  }
`;
