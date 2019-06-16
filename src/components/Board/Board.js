import * as React from 'react'
import { Card } from '../Card/Card'
import { randomDeck } from '../helperFunctions/createCardsArray'
import './styles.scss'

export const Board = () => {
  const deck = randomDeck()

  const [flip, handleFlip] = React.useState([])
  const [checkFlipped, handleCheckFlipped] = React.useState(0)
  const [matchedCards, handleMatchedCards] = React.useState([])
  const [currentCard, handleCurrentCard] = React.useState([])
  const [lockBoard, handleLockBoard] = React.useState(false)
  const callback = (name, index) => {
    if (checkFlipped !== 1) {
      handleCheckFlipped(checkFlipped + 1)
    } else {
      handleCheckFlipped(0)
    }

    if (checkFlipped === 0) {
      handleFlip([...flip, index])
      handleCurrentCard({ name, index })
    } else if (checkFlipped === 1) {
      handleFlip([...flip, index])
      handleLockBoard(true)
      if (currentCard.name === name) {
        handleMatchedCards([...matchedCards, index, currentCard.index])
        handleFlip([])
        handleLockBoard(false)
      } else {
        setTimeout(() => {
          handleFlip([])
          handleLockBoard(false)
        }, 2000)
      }
    }
  }
  return (
    <div className="board">
      {deck.map(({ name, img }, index) => {
        return (
          <Card
            index={index}
            key={index}
            name={name}
            image={img}
            callback={lockBoard ? '' : callback}
            flip={flip.includes(index) || matchedCards.includes(index)}
          />
        )
      })}
    </div>
  )
}