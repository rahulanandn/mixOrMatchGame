import React, {useState} from 'react';
import './App.css';
import Aux from './Aux/Aux';
import GameInfoContainer from './containers/gameInfoContainer/GameInfoContainer'
import Card from './containers/cards/Card/Card';

function App() {
  const [startGame, setstartGame] = useState(false);
  const [display, setDisplay] = useState();
  const [frontFaces, setFrontFaces] = useState([])

  const cardClickHandler = (frontFace) => {
    // const frontFace = frontFace;
    setFrontFaces([ ...frontFaces, {
      id: frontFaces.length,
      value: frontFace
    }])

    }

  return (
    <Aux>
    <p>{console.log(frontFaces)}</p>
      {   
        startGame ? null : <div className="overlayText" onClick={() => setstartGame(true)}>Click to Start</div>
      } 
      <h1 onClick={() => console.log("clicked")} className="pageTitle" >Mix-Or-Match</h1>

      <GameInfoContainer />

      <div className="cardsContainer" >
                <Card display={display} frontImage={'Bat'} clicked={cardClickHandler} /> 
                <Card display={display} frontImage={'Bat'} clicked={cardClickHandler} />
                <Card display={display} frontImage={'Bones'} clicked={cardClickHandler}/>
                <Card display={display} frontImage={'Bones'}/> 
                <Card display={display} frontImage={'Cauldron'}/>
                <Card display={display} frontImage={'Cauldron'}/>
                <Card display={display} frontImage={'Dracula'}/>
                <Card display={display} frontImage={'Dracula'}/>
                <Card display={display} frontImage={'Eye'}/>
                <Card display={display} frontImage={'Eye'}/>
                <Card display={display} frontImage={'Ghost'}/>
                <Card display={display} frontImage={'Ghost'}/>
                <Card display={display} frontImage={'Pumpkin'}/>
                <Card display={display} frontImage={'Pumpkin'}/>
                <Card display={display} frontImage={'Skull'}/> 
                <Card display={display} frontImage={'Skull'}/>
            </div>

    </Aux>
  );
}

export default App;
