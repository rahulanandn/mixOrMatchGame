import React, {useState, useEffect} from 'react';
import './App.css';
import Aux from './Aux/Aux';
import GameInfoContainer from './containers/gameInfoContainer/GameInfoContainer'
import Card from './containers/cards/Card/Card';

function App() {
  // let i = 0;
  const [startGame, setstartGame] = useState(false);
  const [display, setDisplay] = useState();
  const [noMatch, setNoMatch] = useState(false);
  // let noMatch = false;
  const [frontFaces, setFrontFaces] = useState([]);
  const [count, setCount] = useState(0);
  const [faces, setFaces] = useState(['Bat', 'Bat', 'Bones', 'Bones', 'Cauldron', 'Cauldron',
              'Dracula', 'Dracula', 'Eye', 'Eye', 'Ghost', 'Ghost', 'Pumpkin', 'Pumpkin', 'Skull', 'Skull' ])
  
  // let count = 0;

  const cardClickHandler = (frontFace) => {
    // const frontFace = frontFace;
    
    setCount(count + 1);
      // setNoMatch(false)
    setFrontFaces([ ...frontFaces, {
      id: frontFaces.length,
      value: frontFace
    }])
    // setFrontFaces([])
    }

    const matched = ( name ) => {
      if (frontFaces.length === 2 && frontFaces[0].value === frontFaces[1].value && frontFaces[0].value === name) {
        return true
      }
    }
    useEffect(() => {
    
      if (frontFaces.length === 2) {
        setCount(0)
        if(frontFaces[0].value === frontFaces[1].value){
        setDisplay(true)
        setTimeout(() => {
            console.log('This will run after 1 second!')
            }, 200);
        setCount(0)
        setFrontFaces([])

        
        } else{
        setFrontFaces([])
          setTimeout(() => {
            console.log('This will run after 1 second!')
            // setNoMatch(true)
            // noMatch = true
            // setCount(0)
            }, 500);
        } 
        // console.log(frontFaces.length)
      }
    } );

  return (
    <Aux>
  {console.log(frontFaces)}
      {   
        startGame ? null : <div className="overlayText" onClick={() => setstartGame(true)}>Click to Start</div>
      } 
      <h1 onClick={() => console.log("clicked")} className="pageTitle" >Mix-Or-Match</h1>

      <GameInfoContainer />

      <div className="cardsContainer" >
      {faces.map(function(name, index){
                    if ( matched(name) ) {
                        return  <Card key={index} display={1} frontImage={`${name}`} clicked={cardClickHandler} clickTimes={count} /> 
                      }
                     else {
                    return  <Card key={index} frontImage={`${name}`} clicked={cardClickHandler} clickTimes={count} /> 
                    }
                    })}
      </div>
    </Aux>
  );
}
// frontFaces.length === 2 && (name === frontFaces[1].value)
export default App;
