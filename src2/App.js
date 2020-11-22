import React, { useState } from 'react'
import './App.css';
import Card from './cards/card';
function App() {
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
  return (
    <div className="cardsContainer">
       {faces.map(function(name, index){
      return <Card key={index} frontImage={`${name}`}  /> 
                    })}
    </div>
  );
}

export default App;
