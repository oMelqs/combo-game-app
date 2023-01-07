/* eslint-disable react/prop-types */

import { TCard } from "@/common/constants/@types/card.types";
import { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { BottomSuit, CardValue, CardWrapper, TopSuit } from "./styles";

const Card: React.FC<TCard> = ({ value, suit }) => {
  useEffect(() => {
    console.log("Card component mounted");
  }, []);

  return (
    <Tilt scale={1.1}>
      <CardWrapper>
        <TopSuit>
          <img src={suit}></img>
        </TopSuit>
        <CardValue>
          <span>{value}</span>
        </CardValue>
        <BottomSuit>
          <img src={suit}></img>
        </BottomSuit>
      </CardWrapper>
    </Tilt>
  );
};

export default Card;
