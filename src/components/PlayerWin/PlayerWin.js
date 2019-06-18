import * as React from 'react';
import { Card } from '../Card/Card';
import './styles.css';

export const PlayerWin = ({gameResetCallback}) => {

  const [flip, handleFlip] = React.useState(false);
  const handleClick = () => gameResetCallback()
  React.useEffect(() => {
    setTimeout(() => handleFlip(true), 1000)
  },[])

  const img = "http://cdn.wallpapername.com/2560x1533/20121102/hulk%20comic%20character%20comics%20superheroes%20artwork%20marvel%20comics%202560x1533%20wallpaper_www.wallpapername.com_59.jpg";
  return (
    <div className="player-win-wrapper"  onClick={handleClick}>
      <div className="player-win-text">You Smashed It!</div>
      <Card image={img} flip={flip} callback={()=>{}}/>
    </div>
  )
}