import Card from "./Card";
import { DeckContainer, Separator } from "./style";
import club from "@assets/suits/club-suit.svg";
import diamond from "@assets/suits/diamond-suit.svg";
import heart from "@assets/suits/heart-suit.svg";
import spade from "@assets/suits/spade-suit.svg";

const Deck = () => {
  return (
    <DeckContainer>
      <Card value={"4"} suit={club} />
      <Separator />
      <Card value={"7"} suit={heart} />
      <Separator />
      <Card value={"A"} suit={spade} />
      <Separator />
      <Card value={"7"} suit={diamond} />
    </DeckContainer>
  );
};

export default Deck;
