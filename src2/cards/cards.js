import React from 'react';
import Card from './card';
import './Cards.module.css'
export default function Cards () {
    return (
        <div>
            <div className="cardsContainer" >
                <Card  frontImage={'Bat'}  /> 
                <Card  frontImage={'Bat'}/>
                <Card  frontImage={'Bones'}/>
                <Card  frontImage={'Bones'}/> 
                <Card  frontImage={'Cauldron'}/>
                <Card  frontImage={'Cauldron'}/>
                <Card  frontImage={'Dracula'}/>
                <Card  frontImage={'Dracula'}/>
                <Card  frontImage={'Eye'}/>
                <Card  frontImage={'Eye'}/>
                <Card  frontImage={'Ghost'}/>
                <Card  frontImage={'Ghost'}/>
                <Card  frontImage={'Pumpkin'}/>
                <Card  frontImage={'Pumpkin'}/>
                <Card  frontImage={'Skull'}/> 
                <Card  frontImage={'Skull'}/>
            </div>
        </div>
    )
}