import { useState } from "react";
import { TCard } from "../../common/constants/@types/card.types";
import { CardsPack } from "../../common/constants/__cards__/index";
import Deck from "../../components/Deck/index";
import Button from "../../components/shared/Button/index";

export const GamblingTable = () => {
  const [cards, setCards] = useState<[TCard]>();

  const handleDrawCard = (CardsPack: Array<TCard>) => {
    const index = Math.floor(Math.random() * CardsPack.length);
    setCards([CardsPack[index]]);
  };

  return (
    <div>
      <Button
        color={"purpleDark"}
        text={"Comprar uma carta"}
        onClick={() => {
          handleDrawCard(CardsPack);
        }}
      />
      {cards ? <Deck cards={cards} /> : <></>}
    </div>
  );
};
