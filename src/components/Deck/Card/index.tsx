/* eslint-disable react/prop-types */
import { useEffect } from "react";
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
    <CardWrapper draggable >
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
  );
};

export default Card;
