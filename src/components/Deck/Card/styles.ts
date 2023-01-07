import styled from "styled-components";

import { defaultTheme } from "@styles/themes";

export const CardWrapper = styled.div`
  user-select: none;
  display: grid;
  grid-template-columns: 120px;
  grid-template-rows: 40px 100px 40px;
  grid-template-areas: "top-suit" "card-value" "bottom-suit";
  border-radius: 16px;
  background: ${defaultTheme.colors.opaque};
  box-shadow: 4px 4px 12px ${defaultTheme.shadows.darkest};
  text-align: center;
`;

export const CardValue = styled.div`
  grid-area: "card-value";
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  font-weight: 600;
  color: ${defaultTheme.colors.white};
`;

export const TopSuit = styled.div`
  grid-area: "top-suit";
  display: flex;
  justify-content: end;
  align-items: flex-end;
  img {
    padding: 8px;
    height: 100%;
  }
`;

export const BottomSuit = styled.div`
  grid-area: "bottom-suit";
  display: flex;
  justify-content: start;
  align-items: flex-start;
  img {
    padding: 8px;
    height: 100%;
  }
`;
