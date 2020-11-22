import React from 'react';
import './Card.css';
import Aux from '../../../Aux/Aux';
import { cardMatch } from '../../../redux/cardSlice'
import { openCard } from '../../../redux/cardSlice';
import { useDispatch, useSelector } from 'react-redux';
import {initiateFlipCount} from '../../../redux/cardSlice';
import { closeCardState } from '../../../redux/cardSlice';

function Card(props) {

    const open = useSelector(state => state.cards.open)
    const allCardMatchState = useSelector(state => state.cards.allCards)
    
    const matched = allCardMatchState[props.frontImage]
    
    const dispatch = useDispatch()

    const shouldRotate = (event) => {
        if (!matched && !props.clicked.clicked && !open ) {
            if (props.flipCount <= 1){
            //    setClicked(true)
                dispatch(openCard(props.card))
                props.onCardClicked(props.card)
                if (props.flipCount === 1) {
                    setTimeout(() => {
                        dispatch(cardMatch())
                        dispatch(closeCardState()) 
                    },500)
                    
                    // add async not to run untill cardmatch finishes
                    dispatch(initiateFlipCount())
                } 
        } 
        }
    } 
    
    return ( 
        <Aux>
            <div className= {`card  ${props.clicked.clicked ? `rotate`  : ``} ${matched ? `matched ` : ''}`} onClick={shouldRotate}>
                    <div className={`cardFront cardFace `}>
                        <img className="cobWeb cobWebTopRight" alt='bottom-right' src={ require('../../../Assets/Images/CobwebGrey.png')} />
                        <img className="cobWeb cobWebTopLeft" alt='bottom-left' src={ require('../../../Assets/Images/CobwebGrey.png')} />
                        <img className="cobWeb cobWebBottomRight" alt='bottom-right' src={ require('../../../Assets/Images/CobwebGrey.png')} />
                        <img className="cobWeb cobWebBottomLeft" alt='bottom-left' src={ require('../../../Assets/Images/CobwebGrey.png')} />
                        <img className="cardValue" alt='face' src={ require(`../../../Assets/Images/${props.frontImage}.png`)}/>
                    </div>
                    
                    <div className= {`cardBack cardFace `}>
                        <img className="cobWeb cobWebTopRight" alt='bottom-right' src={ require('../../../Assets/Images/Cobweb.png')} />
                        <img className="cobWeb cobWebTopLeft" alt='bottom-left' src={ require('../../../Assets/Images/Cobweb.png')} />
                        <img className="cobWeb cobWebBottomRight" alt='bottom-right' src={ require('../../../Assets/Images/Cobweb.png')} />
                        <img className="cobWeb cobWebBottomLeft" alt='bottom-left' src={ require('../../../Assets/Images/Cobweb.png')} />
                        <img className="spider" alt='back' src={ require('../../../Assets/Images/Spider.png')}/>
                    </div>           
            </div>
        </Aux>
    )
    }
    export default Card;