import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';
import './App.css';
import Aux from './Aux/Aux';
import GameInfoContainer from './containers/gameInfoContainer/GameInfoContainer'
import Card from './containers/cards/Card/Card';

function App() {

    const [noMatch, setNoMatch] = useState();
  const [startGame, setstartGame] = useState(false);
  const [frontFaces, setFrontFaces] = useState();
  const [count, setCount] = useState(0);
  const [Bat, setBat] = useState(false)
  const [bat, setbat] = useState()
  const [Bones, setBones] = useState(false)
  const [bones, setbones] = useState()
  const [Cauldron, setCauldron] = useState(false)
  const [cauldron, setNoCauldron] = useState(false)
  const [Dracula, setDracula] = useState(false)
  const [dracula, setNoDracula] = useState(false)
  const [Eye, setEye] = useState(false)
  const [eye, setNoEye] = useState(false)
  const [Ghost, setGhost] = useState(false)
  const [ghost, setNoGhost] = useState(false)
  const [Pumpkin, setPumpkin] = useState(false)
  const [pumpkin, setNoPumpkin] = useState(false)
  const [Skull, setSkull] = useState(false)
  const [skull, setNoSkull] = useState(false)
  const [faces, setFaces] = useState(shuffle(['Bat', 'Bat', 'Bones', 'Bones', 'Cauldron', 'Cauldron',
              'Dracula', 'Dracula', 'Eye', 'Eye', 'Ghost', 'Ghost', 'Pumpkin', 'Pumpkin', 'Skull', 'Skull' ]))
  


  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }

//   console.log(faces);
//   console.log(shuffle(faces))
  const misMatch = (frontFaces, prevFace) => {

  }
  const cardClickHandler = (frontFace) => {
    setCount(count + 1);
    setFrontFaces(frontFace);
    }
    const prevFace = usePrevious(frontFaces)

    useEffect(() => {
        
        if( count === 2) {
            if (frontFaces === prevFace) {
            switch (frontFaces) {
                case ('Bat'):
                    setBat(true);
                    break;

                case ('Bones'):
                    setBones(true);
                    break;
                
                case ('Cauldron'):
                    setCauldron(true);
                    break;

                case ('Dracula'):
                    setDracula(true);
                    break;

                case ('Eye'):
                    setEye(true);
                    break;

                case ('Ghost'):
                    setGhost(true);
                    break;

                case ('Pumpkin'):
                    setPumpkin(true);
                    break;

                case ('Skull'):
                    setSkull(true);
                    break;

                default:
                    console.log('default');
            }
            } else {
                setTimeout(() => {
                    console.log('This will run after 1 second!')
                    // setNoMatch(true)
                    // noMatch = true
                    setCount(0)
                    // setbat(true)
                    // setbones(true)
                    setNoMatch(true)
                    // (set`${eval(frontFaces.toLowerCase())}`(true))
                    // setbat(false)
                    // setbones(false)
                    setNoMatch(false)
                    }, 500);
            }
        }
        setCount(0)
    }, [prevFace]);

    useLayoutEffect(() => {
        
    }, [])

  return (
    <Aux>
      {   
        startGame ? null : <div className="overlayText" onClick={() => setstartGame(true)}>Click to Start</div>
      } 
      <h1  className="pageTitle" >Mix-Or-Match</h1>

      <GameInfoContainer />

      <div className="cardsContainer" >

      {faces.map(function(name, index){
      return <Card key={index} frontImage={`${name}`} clicked={cardClickHandler} clickTimes={count} matched={eval(name)} noMatch={noMatch} /> 
                    })}

          {/* <Card frontImage={'Bat'} clicked={cardClickHandler} clickTimes={count} matched={bat} noMatch={bat}/> 
          <Card frontImage={'Bat'} clicked={cardClickHandler} clickTimes={count} matched={bat} noMatch={noBat}/>
          <Card frontImage={'Bones'} clicked={cardClickHandler} clickTimes={count} matched={bones} noMatch={bones}/>
          <Card frontImage={'Bones'} clicked={cardClickHandler} clickTimes={count} matched={bones} noMatch={noBones}/> 
          <Card frontImage={'Cauldron'} clicked={cardClickHandler} clickTimes={count} matched={cauldron} noMatch={noCauldron}/>
          <Card frontImage={'Cauldron'} clicked={cardClickHandler} clickTimes={count} matched={cauldron} noMatch={noCauldron}/>
          <Card frontImage={'Dracula'} clicked={cardClickHandler} clickTimes={count} matched={dracula} noMatch={noDracula}/>
          <Card frontImage={'Dracula'} clicked={cardClickHandler} clickTimes={count} matched={dracula} noMatch={noDracula}/>
          <Card frontImage={'Eye'} clicked={cardClickHandler} clickTimes={count} matched={eye} noMatch={noEye}/>
          <Card frontImage={'Eye'} clicked={cardClickHandler} clickTimes={count} matched={eye} noMatch={noEye}/>
          <Card frontImage={'Ghost'} clicked={cardClickHandler} clickTimes={count} matched={ghost} noMatch={noGhost}/>
          <Card frontImage={'Ghost'} clicked={cardClickHandler} clickTimes={count} matched={ghost} noMatch={noGhost}/>
          <Card frontImage={'Pumpkin'} clicked={cardClickHandler} clickTimes={count} matched={pumpkin} noMatch={noPumpkin}/>
          <Card frontImage={'Pumpkin'} clicked={cardClickHandler} clickTimes={count} matched={pumpkin} noMatch={noPumpkin}/>
          <Card frontImage={'Skull'} clicked={cardClickHandler} clickTimes={count} matched={skull} noMatch={noSkull}/> 
          <Card frontImage={'Skull'} clicked={cardClickHandler} clickTimes={count} matched={skull} noMatch={noSkull}/> */}
      </div>
    </Aux>
  );
}
// frontFaces.length === 2 && (name === frontFaces[1].value)
// eval(name.toLowerCase())
export default App;
