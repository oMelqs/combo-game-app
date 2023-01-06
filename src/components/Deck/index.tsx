import club from "@assets/suits/club-suit.svg";
import diamond from "@assets/suits/diamond-suit.svg";
import heart from "@assets/suits/heart-suit.svg";
import spade from "@assets/suits/spade-suit.svg";
import Card from "./Card";
import { DeckContainer, Separator } from "./style";

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
      <Separator />
      <Card value={"Q"} suit={club} />
      <Separator />
      <Card value={"J"} suit={heart} />
      <Separator />
      <Card value={"K"} suit={spade} />
      <Separator />
      <Card value={"1"} suit={diamond} />
      <Separator />
      <Card value={"2"} suit={club} />
      <Separator />
      <Card value={"3"} suit={heart} />
      <Separator />
      <Card value={"A"} suit={spade} />
      <Separator />
      <Card value={"7"} suit={diamond} />
      <Separator />
      <Card value={"7"} suit={diamond} />
      <Separator />
    </DeckContainer>
  );
};

export default Deck;
