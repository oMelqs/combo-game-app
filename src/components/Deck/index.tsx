import Card from "./Card";
import { DeckContainer, Separator } from "./style";

const Deck = () => {
  return (
    <DeckContainer>
      <Card value={""} suit={"club"} />
      <Separator />
      <Card value={""} suit={"club"} />
    </DeckContainer>
  );
};

export default Deck;
