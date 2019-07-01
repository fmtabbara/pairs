import * as React from 'react';
import { Card } from '../Card/Card';
import './styles.css';

export const PlayerWin = ({gameResetCallback}) => {

  const [flip, handleFlip] = React.useState(false);
  const [showWinMessage, handleShowWinMessage] = React.useState(false)
  const handleClick = () => gameResetCallback()

  React.useEffect(() => {
    setTimeout(() => {
      handleFlip(true)
      handleShowWinMessage(true)
    }, 1000)
  },[])

  const img = "http://cdn.wallpapername.com/2560x1533/20121102/hulk%20comic%20character%20comics%20superheroes%20artwork%20marvel%20comics%202560x1533%20wallpaper_www.wallpapername.com_59.jpg";
  return (
    <div className="player-win-wrapper"  onClick={handleClick}>
     {
       showWinMessage ? 
        (
          <div> 
            <div className="player-win-text">You Smashed It!</div>
            <div className="player-win-text-bottom">Click anywhere and then 'Re-engage' to play</div>
          </div>
        ) : ''
     } 
      <Card image={img} flip={flip} callback={()=>{}}/>
    </div>
  )
}