import React, { useState } from 'react';
import './Card.css';
import Aux from '../../../Aux/Aux';

function Card(props) {

    const [display, setDisplay] = useState(false) 
    const frontFaceImageUrl = props.frontImage;
    const [count, setCount] = useState(0)
    // const display = false;

    const clickFlipHandler = () => {
        setCount(count + 1)
        props.clicked(frontFaceImageUrl)
        setDisplay(true)
    }

    return ( 
        <Aux>
        <div className= "card" onClick={clickFlipHandler}>
            
            {
                display ?
            
                <div className="cardFront cardFace ">
                    <img className="cobWeb cobWebTopRight" src={ require('../../../Assets/Images/CobwebGrey.png')} />
                    <img className="cobWeb cobWebTopLeft" src={ require('../../../Assets/Images/CobwebGrey.png')} />
                    <img className="cobWeb cobWebBottomRight" src={ require('../../../Assets/Images/CobwebGrey.png')} />
                    <img className="cobWeb cobWebBottomLeft" src={ require('../../../Assets/Images/CobwebGrey.png')} />
                    <img className="cardValue" src={ require(`../../../Assets/Images/${frontFaceImageUrl}.png`)}/>
                </div>:
                <div className= " cardBack cardFace">
                    <img className="cobWeb cobWebTopRight" src={ require('../../../Assets/Images/Cobweb.png')} />
                    <img className="cobWeb cobWebTopLeft" src={ require('../../../Assets/Images/Cobweb.png')} />
                    <img className="cobWeb cobWebBottomRight" src={ require('../../../Assets/Images/Cobweb.png')} />
                    <img className="cobWeb cobWebBottomLeft" src={ require('../../../Assets/Images/Cobweb.png')} />
                    <img className="spider" src={ require('../../../Assets/Images/Spider.png')}/>
                </div>
                }
            
        </div>
        </Aux>
    )
}

export default Card;