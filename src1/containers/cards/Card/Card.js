import React, { useState, useEffect } from 'react';
import './Card.css';
import Aux from '../../../Aux/Aux';

function Card(props) {
   const [clicked, setClicked] = useState(false)
   const [matched, setMatched] = useState(false)

   const shouldRotate = () => {
       if (!matched) {
           setClicked(true)
       } else setClicked(false)
   }
    return ( 
        <Aux>
        <div className= {`card ${clicked ? `rotate` : ''}`} onClick={() => shouldRotate()}>
            
                 <div className={`cardFront cardFace `}>
                    <img className="cobWeb cobWebTopRight" alt='bottom-right' src={ require('../../../Assets/Images/CobwebGrey.png')} />
                    <img className="cobWeb cobWebTopLeft" alt='bottom-left' src={ require('../../../Assets/Images/CobwebGrey.png')} />
                    <img className="cobWeb cobWebBottomRight" alt='bottom-right' src={ require('../../../Assets/Images/CobwebGrey.png')} />
                    <img className="cobWeb cobWebBottomLeft" alt='bottom-left' src={ require('../../../Assets/Images/CobwebGrey.png')} />
                    <img className="cardValue" alt='face' src={ require(`../../../Assets/Images/${props.frontImage}.png`)}/>
                </div>
                
                <div className= {`cardBack cardFace`}>
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