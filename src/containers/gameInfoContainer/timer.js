import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { setStartGame } from '../../redux/cardSlice'

const Timer = () => {
    const [seconds, setSeconds] = useState(100);

    const startGame = useSelector(state => state.cards.startGame);
    const isActive = startGame

    const dispatch = useDispatch()
    
    function reset() {
        setSeconds(100);
        dispatch(setStartGame(false))
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
        interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
        }, 1000);
        if (seconds === 0) {
            reset()
        }
        } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, 
    [isActive, seconds]
    );

    return (
        <div >
            Time {seconds}s
        </div>
    );
    };

    export default Timer;