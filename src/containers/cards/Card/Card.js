import React, { useState, useEffect } from 'react';
import './Card.css';
import Aux from '../../../Aux/Aux';

function Card(props) {

    const frontFaceImageUrl = props.frontImage;
    const [count, setCount] = useState(0)
    const clickTimes = props.clickTimes;
    // const [matched, setMatched] = useState(props.matched);
    const [rotate, setRotate] = useState(false);

    const clickFlipHandler = (event) => {
        // console.log(event.currentTarget)
        
        console.log(typeof(event.currentTarget.className))
        console.log(event.currentTarget)
        if (props.matched) {
            
        } else {
        if (clickTimes < 2 && count < 1 ) {
            setCount(count + 1)
            console.log(count)
            // count = count +1;
            // console.log('clicked')
            props.clicked(frontFaceImageUrl)
            // event.currentTarget.classList = [ "card rotate"]
            event.currentTarget.className = "card rotate"
            // setRotate(true) 
            // console.log(props.clickTimes)
            }
        }
    }
    useEffect(() => {
        if(count === 1) {
            setCount(0)
        }
    })
    return ( 
        <Aux>
        <div className= {`card ${props.matched? `matched rotate`: ``} ${props.noMatch? ``: null}`}  onClick={clickFlipHandler}>
            
                 <div className={`cardFront cardFace `}>
                    <img className="cobWeb cobWebTopRight" alt='bottom-right' src={ require('../../../Assets/Images/CobwebGrey.png')} />
                    <img className="cobWeb cobWebTopLeft" alt='bottom-left' src={ require('../../../Assets/Images/CobwebGrey.png')} />
                    <img className="cobWeb cobWebBottomRight" alt='bottom-right' src={ require('../../../Assets/Images/CobwebGrey.png')} />
                    <img className="cobWeb cobWebBottomLeft" alt='bottom-left' src={ require('../../../Assets/Images/CobwebGrey.png')} />
                    <img className="cardValue" alt='face' src={ require(`../../../Assets/Images/${frontFaceImageUrl}.png`)}/>
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