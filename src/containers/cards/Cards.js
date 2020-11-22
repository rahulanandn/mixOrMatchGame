import React,  { useState } from 'react'
import Card from  './Card/Card';
import { setPrevCard } from '../../redux/cardSlice';
import { setCurrentCard } from '../../redux/cardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { cardMatch } from '../../redux/cardSlice'

import './Cards.css'

function Cards() {
  const flipCount = useSelector(state => state.cards.flipCount)
  // const myCard = useSelector(state => state.cards.currentCard)
  const allCardMatchState = useSelector(state => state.cards.allCards)
  const clickedCards = useSelector(state => state.cards.clickedCards)

  const dispatch = useDispatch()

  const [cardsList, setCardsList] = useState(
    shuffle(
    [{"id":"bat1","name":"Bat"},{"id":"bat2","name":"Bat"},{"id":"bones1","name":"Bones"},{"id":"bones2","name":"Bones"},
    {"id":"cauldron1","name":"Cauldron"},{"id":"cauldron2","name":"Cauldron"},{"id":"dracula1","name":"Dracula"},
    {"id":"dracula2","name":"Dracula"},{"id":"eye1","name":"Eye"},{"id":"eye2","name":"Eye"},{"id":"ghost1","name":"Ghost"},
    {"id":"ghost2","name":"Ghost"},{"id":"pumpkin1","name":"Pumpkin"},{"id":"pumpkin2","name":"Pumpkin"},{"id":"skull1","name":"Skull"},
    {"id":"skull2","name":"Skull"}]
  )
  );

  // const [faces, setFaces] = useState(
  //   shuffle(
  //     ['Bat', 'Bat', 'Bones', 'Bones', 'Cauldron', 'Cauldron',
  //           'Dracula', 'Dracula', 'Eye', 'Eye', 'Ghost', 'Ghost', 'Pumpkin', 'Pumpkin', 'Skull', 'Skull' ]
  //           )
  //           )

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
  const onCardClicked = (card) => {
      if (card) {
          switch (flipCount) {
            case (0):
            dispatch(
                setPrevCard({
                id:card.id,
                cardName:card.name
                })
                );
            break;
            case (1):
            dispatch(
                setCurrentCard({
                id:card.id,
                cardName:card.name
                })
            );
            break;
            default:
            }
        }
    }
    return (
       <div className="cardsContainer" >
           {cardsList.map(function(card, index){
            // console.log(name)
                return <Card key={card.id} frontImage={card.name} onCardClicked={onCardClicked} flipCount={flipCount}
                cardMatch={cardMatch} matched={allCardMatchState[card.name]} card={card} clicked={clickedCards.find(clickedCard => clickedCard.id === card.id)}
                />
                })}
    {/*
      return <Card key={index} frontImage={`${card}`} onCardClicked={onCardClicked} flipCount={flipCount} cardMatch={cardMatch} matched={allCardMatchState[card]}/>
      })} */}

        </div>
    )
}

export default Cards;