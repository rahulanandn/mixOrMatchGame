import React from 'react';
import Aux from '../../Aux/Aux';
import './GameInfoContainer.css';
import { useSelector } from 'react-redux';
import Timer from './timer';

function GameInfoContainer ()  {
    const flips = useSelector(state => state.cards.totalFlips);
    return (
        <Aux>
            <div className="gameInfoContainer">
                <div className="gameInfo">
                     <span> <Timer /></span>
                </div>
                <div className="gameInfo">
                    Flips <span>{flips}</span>
                </div>
            </div>
        </Aux>
    )
}
export default GameInfoContainer;