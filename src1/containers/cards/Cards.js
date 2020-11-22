import React,  { useState } from 'react'
import Card from  './Card/Card';
import {initiateFlipCount} from '../../redux/cardSlice';
import { setPrevCard } from '../../redux/cardSlice';
import { setCurrentCard } from '../../redux/cardSlice';
import { useDipatch, useSelector } from 'react-redux';

import Aux from '../../Aux/Aux';
import './Cards.css'

function Cards() {
  // const flipCount = useSelector(state => state.flipCount);
    const [faces, setFaces] = useState(shuffle(['Bat', 'Bat', 'Bones', 'Bones', 'Cauldron', 'Cauldron',
              'Dracula', 'Dracula', 'Eye', 'Eye', 'Ghost', 'Ghost', 'Pumpkin', 'Pumpkin', 'Skull', 'Skull' ]))

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

      const dispatch = useDispatch()

      const onCardClicked = (cardName) =>{
        switch (0) {
          case (0):
            dispatch(
              setPrevCard(cardName)
              );
              break;
          case (1):
            dispatch(
              setCurrentCard(cardName)
            );
            break;
          case (2):
            dispatch(
              initiateFlipCount()
            );
            break;
          default:
            cardName;

        }
      }

    return (
       <div className="cardsContainer" >
      {faces.map(function(name, index){
      return <Card key={index} frontImage={`${name}`}  /> 
                    })}
      </div>
        
    )
}


export default Cards;