import React from 'react';
import Aux from '../../Aux/Aux';
import classes from './GameInfoContainer.module.css';
const gameInfoContainer = () => {
    const timeRemaining = 0;
    const flips = 0;
    return (
        <Aux>
            <div className={classes.gameInfoContainer}>
                <div className={classes.gameInfo}>
                    Time <span> {timeRemaining}</span>
                </div>
                <div className={classes.gameInfo}>
                    Flips <span>{flips}</span>
                </div>
            </div>
        </Aux>
    )
}


export default gameInfoContainer;