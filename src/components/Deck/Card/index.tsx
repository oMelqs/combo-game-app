import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextBody,
  CardStatWrapper,
  CardStats,
  LinkText,
} from "./styles";
import Tilt from "react-parallax-tilt";

export type CardProps = {
  value: string;
  suit: "club" | "diamond" | "heart" | "spade";
};

const Card: React.FC<CardProps> = () => {
  return (
    <Tilt>
      <CardWrapper></CardWrapper>
    </Tilt>
  );
};

export default Card;
