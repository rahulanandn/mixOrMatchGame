import React,  { useState } from 'react'
import Card from  './Card/Card';
import Aux from '../../Aux/Aux';
import './Cards.css'

function Cards() {

    const [display, setDisplay] = useState();
    const [count, setCount] = useState(0);
    const [value, setValue] = useState();

    const cardClickHandler = (a) => {
        // setCount(count + a );
     
    }

    return (
        <Aux>
            <p>{count}</p>
            <div className="cardsContainer" >
                <Card display={display} frontImage={'Bat'} count={cardClickHandler} /> 
                <Card display={display} frontImage={'Bat'} count={cardClickHandler}/>
                <Card display={display} frontImage={'Bones'}/>
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
        
    )
}


export default Cards;