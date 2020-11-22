import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';
import './App.css';
import Aux from './Aux/Aux';
import GameInfoContainer from './containers/gameInfoContainer/GameInfoContainer'
import Cards from './containers/cards/Cards';

function App() {
  const [startGame, setstartGame] = useState(false);

  return (
    <Aux>
      {   
        startGame ? null : <div className="overlayText" onClick={() => setstartGame(true)}>Click to Start</div>
      } 
      <h1  className="pageTitle" >Mix-Or-Match</h1>
      <GameInfoContainer />
      <Cards />
    </Aux>
  );
}

export default App;
