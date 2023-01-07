/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { BottomSuit, CardValue, CardWrapper, TopSuit } from "./styles";

export type CardProps = {
  value: string;
  suit: string;
};

const Card: React.FC<CardProps> = ({ value, suit }) => {
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
