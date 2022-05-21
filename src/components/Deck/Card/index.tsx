/* eslint-disable react/prop-types */
import { CardWrapper, TopSuit, BottomSuit, CardValue } from "./styles";
import Tilt from "react-parallax-tilt";
import { useEffect } from "react";

export type CardProps = {
  value: string;
  suit: string;
};

const Card: React.FC<CardProps> = ({ value, suit }) => {
  useEffect(() => {
    console.log("Card component mounted");
  }, []);

  return (
    <Tilt>
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
