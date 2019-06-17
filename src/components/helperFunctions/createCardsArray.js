import { frontFaces } from "../images/images";

export const randomDeck = () => {
  
  const pairCards = [...frontFaces, ...frontFaces];
  let cards = [];

  while (pairCards.length !== 0) {
    const rand = Math.floor(Math.random() * Math.floor(pairCards.length));
    cards.push(pairCards[rand]);
    pairCards.splice(rand, 1);
  }
  return cards;
};
