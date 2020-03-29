import React,  { useState } from 'react'
import Card from  './Card/Card';
import './Cards.css'

function Cards() {

    const [display, setDisplay] = useState();

  

    return (
        <div className="cardsContainer" >
            <Card display={display}  frontImage={'Bat'} /> 
            <Card display={display} frontImage={'Bat'}/>
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
        
    )
}


export default Cards;