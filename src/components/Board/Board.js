import * as React from 'react'
import { Card } from '../Card/Card'
import { randomDeck } from '../helperFunctions/createCardsArray'
import './styles.css'

export const Board = ({playerWinCallback}) => {

  const [newDeck, handleNewDeck] = React.useState(randomDeck())
  const [flip, handleFlip] = React.useState([])
  const [checkFlipped, handleCheckFlipped] = React.useState(0)
  const [matchedCards, handleMatchedCards] = React.useState([])
  const [currentCard, handleCurrentCard] = React.useState([])
  const [lockBoard, handleLockBoard] = React.useState(false)
  

  const handleReset = () => {
    handleLockBoard(true)
    handleFlip([])
    handleMatchedCards([])
    handleCheckFlipped(0)
    setTimeout(() => {
      handleNewDeck(randomDeck())
      handleLockBoard(false)
    },500)
  }
  const callback = (name, index) => {

    handleFlip([...flip, index])
    handleCurrentCard({ name, index })
    handleCheckFlipped(1)

    
    if (checkFlipped === 0) {
      handleFlip([...flip, index])
      handleCurrentCard({ name, index })
    } else if (checkFlipped === 1 && index !== currentCard.index) {
      handleLockBoard(true)
      handleFlip([...flip, index])
      if (currentCard.name === name && currentCard.index !== index) {
        handleMatchedCards([...matchedCards, index, currentCard.index])
        handleFlip([])
        handleCheckFlipped(0)
        handleLockBoard(false)
        if(matchedCards.length === 14) {
          playerWinCallback()
        }
      } else {
        setTimeout(() => {
          handleFlip([])
          handleCheckFlipped(0)
          handleLockBoard(false)
        }, 1000)
      }
    }
  }
  return (
    <div className="board">
      <button onClick={handleReset}>Re-engage</button>
      {newDeck.map(({ name, img }, index) => {
        return (
          <Card
            index={index}
            key={index}
            name={name}
            image={img}
            callback={lockBoard ? () => '' : callback}
            flip={flip.includes(index) || matchedCards.includes(index)}
          />
        )
      })}
    </div>
  )
}