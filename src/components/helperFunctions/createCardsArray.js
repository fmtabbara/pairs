import { frontFaces } from "../images/images";

const pairCards = [...frontFaces, ...frontFaces];
let cards = [];

export const randomDeck = () => {
  while (pairCards.length !== 0) {
    const rand = Math.floor(Math.random() * Math.floor(pairCards.length));
    cards.push(pairCards[rand]);
    pairCards.splice(rand, 1);
  }
  return cards;
};
