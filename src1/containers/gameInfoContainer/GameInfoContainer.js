import React, { useState } from 'react';
import Aux from '../../Aux/Aux';
import './GameInfoContainer.css';


function GameInfoContainer ()  {
    const timeRemaining = 0;
    const flips = 0;
    return (
        <Aux>
            <div className="gameInfoContainer">
                <div className="gameInfo">
                    Time <span> {timeRemaining}</span>
                </div>
                <div className="gameInfo">
                    Flips <span>{flips}</span>
                </div>
            </div>
        </Aux>
    )
}


export default GameInfoContainer;