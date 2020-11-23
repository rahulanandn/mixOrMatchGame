import React from 'react';
import './App.css';
import Aux from './Aux/Aux';
import GameInfoContainer from './containers/gameInfoContainer/GameInfoContainer'
import Cards from './containers/cards/Cards';
import { useSelector, useDispatch} from 'react-redux';
import { setStartGame } from './redux/cardSlice';

function App() {
  const startGame = useSelector(state => state.cards.startGame);
//   const [endGame, setEndGame] = useState(false)
  const totalMatches = useSelector(state => state.cards.totalMatches)

  const dispatch = useDispatch()
   return (
    <Aux>
		
      {   
        startGame ? null : <div className="overlayText" onClick={() => dispatch(setStartGame(true))}>Click to Start</div>
      }
      {totalMatches === 8 ? <div className="overlayText" onClick={() => window.location.reload(false)}>Game Over</div> : null } 
      <h1  className="pageTitle" >Cards Match</h1>
      <GameInfoContainer />
      <Cards />
    </Aux>
  );
}

export default App;
