/* eslint-disable react/prop-types */
import { TDeck } from "@/common/constants/@types/deck.types";
import { useEffect } from "react";
import Card from "./Card";
import { DeckContainer, Separator } from "./style";

const Deck: React.FC<TDeck> = ({ cards }) => {
  useEffect(() => {
    console.log("Deck component mounted");
  }, []);

  return (
    <DeckContainer>
      {cards.map((card) => {
        return (
          <>
            <Card
              key={card.id}
              id={card.id}
              value={card.value}
              suit={card.suit}
            />
            <Separator />
          </>
        );
      })}
    </DeckContainer>
  );
};

export default Deck;
