import { Club, Diamond, Heart, Spade } from "@/assets/suits";
import { TCard } from "../@types/card.types";

export const CardsPack: Array<TCard> = [
  // Order Cards:   Zap > Heart > Spade > Diamond > 3 > 2 > 1 > K > J > Q
  // The number of cards is 27,
  // one Zap,
  // one Heart,
  // one Spade,
  // one Diamond,
  // four 3s (♣️❤️♠️♦️),
  // four 2s (♣️❤️♠️♦️),
  // three Aces (♣️❤️♦️),
  // four Kings (♣️❤️♠️♦️),
  // four Jacks (♣️❤️♠️♦️)
  // and four Queens (♣️❤️♠️♦️)

  // Zap
  { id: 1, value: "4", suit: Club },
  // Heart
  { id: 2, value: "7", suit: Heart },
  // Spade
  { id: 3, value: "A", suit: Spade },
  // Diamond
  { id: 4, value: "7", suit: Diamond },
  // 3
  { id: 5, value: "3", suit: Club },
  { id: 6, value: "3", suit: Heart },
  { id: 7, value: "3", suit: Spade },
  { id: 8, value: "3", suit: Diamond },
  //2
  { id: 9, value: "2", suit: Club },
  { id: 10, value: "2", suit: Heart },
  { id: 11, value: "2", suit: Spade },
  { id: 12, value: "2", suit: Diamond },
  // Aces
  { id: 13, value: "A", suit: Club },
  { id: 14, value: "A", suit: Heart },
  { id: 15, value: "A", suit: Diamond },
  // Kings
  { id: 16, value: "K", suit: Club },
  { id: 17, value: "K", suit: Heart },
  { id: 18, value: "K", suit: Spade },
  { id: 19, value: "K", suit: Diamond },
  // Jacks
  { id: 20, value: "J", suit: Club },
  { id: 21, value: "J", suit: Heart },
  { id: 22, value: "J", suit: Spade },
  { id: 23, value: "J", suit: Diamond },
  // Queens
  { id: 24, value: "Q", suit: Club },
  { id: 25, value: "Q", suit: Heart },
  { id: 26, value: "Q", suit: Spade },
  { id: 27, value: "Q", suit: Diamond },
];
