import * as React from 'react'
import classNames from 'classnames'
import './styles.scss'
import { callbackify } from 'util'

export const Card = ({ flip, image, name, callback, index }) => {
  const handleClick = () => {
    callback(name, index)
  }

  return (
    <>
      <div
        onClick={handleClick}
        className={classNames('card', { cardFlip: flip })}
      >
        <div
          className="cardFront"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="cardBack" />
      </div>
    </>
  )
}
