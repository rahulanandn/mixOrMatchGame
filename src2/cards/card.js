import React, {Fragment } from 'react';
import './Card.css';
export default function Card (props) {
    return (
        <Fragment>
            <div className={`card`}>
                <div className={`cardFront cardFace `}>
                    <img className="cobWeb cobWebTopRight" alt='bottom-right' src={ require('../Assets/Images/CobwebGrey.png')} />
                    <img className="cobWeb cobWebTopLeft" alt='bottom-left' src={ require('../Assets/Images/CobwebGrey.png')} />
                    <img className="cobWeb cobWebBottomRight" alt='bottom-right' src={ require('../Assets/Images/CobwebGrey.png')} />
                    <img className="cobWeb cobWebBottomLeft" alt='bottom-left' src={ require('../Assets/Images/CobwebGrey.png')} />
                    <img className="cardValue" alt='face' src={ require(`../Assets/Images/${props.frontImage}.png`)}/>
                </div>
        
                <div className= {`cardBack cardFace `}>
                    <img className="cobWeb cobWebTopRight" alt='bottom-right' src={ require('../Assets/Images/Cobweb.png')} />
                    <img className="cobWeb cobWebTopLeft" alt='bottom-left' src={ require('../Assets/Images/Cobweb.png')} />
                    <img className="cobWeb cobWebBottomRight" alt='bottom-right' src={ require('../Assets/Images/Cobweb.png')} />
                    <img className="cobWeb cobWebBottomLeft" alt='bottom-left' src={ require('../Assets/Images/Cobweb.png')} />
                    <img className="spider" alt='back' src={ require('../Assets/Images/Spider.png')}/>
                </div>   
            </div>
            
        </Fragment> 
    )
}