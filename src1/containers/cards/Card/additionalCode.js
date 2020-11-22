(
                    matched ? 
                    <div className="cardFront cardFace   ">
                    <img className="cobWeb cobWebTopRight" src={ require('../../../Assets/Images/CobwebGrey.png')} />
                    <img className="cobWeb cobWebTopLeft" src={ require('../../../Assets/Images/CobwebGrey.png')} />
                    <img className="cobWeb cobWebBottomRight" src={ require('../../../Assets/Images/CobwebGrey.png')} />
                    <img className="cobWeb cobWebBottomLeft" src={ require('../../../Assets/Images/CobwebGrey.png')} />
                    <img className="cardValue" src={ require(`../../../Assets/Images/${frontFaceImageUrl}.png`)}/>
                </div>:

                    <div className="cardFront cardFace  ">
                    <img className="cobWeb cobWebTopRight" src={ require('../../../Assets/Images/CobwebGrey.png')} />
                    <img className="cobWeb cobWebTopLeft" src={ require('../../../Assets/Images/CobwebGrey.png')} />
                    <img className="cobWeb cobWebBottomRight" src={ require('../../../Assets/Images/CobwebGrey.png')} />
                    <img className="cobWeb cobWebBottomLeft" src={ require('../../../Assets/Images/CobwebGrey.png')} />
                    <img className="cardValue" src={ require(`../../../Assets/Images/${frontFaceImageUrl}.png`)}/>
                </div>
                 ):




                 <Card noMatch={noMatch} display={display} frontImage={'Bat'} clicked={cardClickHandler} clickTimes={count} /> 
                 <Card noMatch={noMatch} display={display} frontImage={'Bat'} clicked={cardClickHandler} clickTimes={count} />
                 <Card noMatch={noMatch} display={display} frontImage={'Bones'} clicked={cardClickHandler} clickTimes={count}/>
                 <Card noMatch={noMatch} display={display} frontImage={'Bones'} clicked={cardClickHandler} clickTimes={count}/> 
                 <Card noMatch={noMatch} display={display} frontImage={'Cauldron'} clicked={cardClickHandler} clickTimes={count}/>
                 <Card noMatch={noMatch} display={display} frontImage={'Cauldron'} clicked={cardClickHandler} clickTimes={count}/>
                 <Card noMatch={noMatch} display={display} frontImage={'Dracula'} clicked={cardClickHandler} clickTimes={count}/>
                 <Card noMatch={noMatch} display={display} frontImage={'Dracula'} clicked={cardClickHandler} clickTimes={count}/>
                 <Card noMatch={noMatch} display={display} frontImage={'Eye'} clicked={cardClickHandler} clickTimes={count}/>
                 <Card noMatch={noMatch} display={display} frontImage={'Eye'} clicked={cardClickHandler} clickTimes={count}/>
                 <Card noMatch={noMatch} display={display} frontImage={'Ghost'} clicked={cardClickHandler} clickTimes={count}/>
                 <Card noMatch={noMatch} display={display} frontImage={'Ghost'} clicked={cardClickHandler} clickTimes={count}/>
                 <Card noMatch={noMatch} display={display} frontImage={'Pumpkin'} clicked={cardClickHandler} clickTimes={count}/>
                 <Card noMatch={noMatch} display={display} frontImage={'Pumpkin'} clicked={cardClickHandler} clickTimes={count}/>
                 <Card noMatch={noMatch} display={display} frontImage={'Skull'} clicked={cardClickHandler} clickTimes={count}/> 
                 <Card noMatch={noMatch} display={display} frontImage={'Skull'} clicked={cardClickHandler} clickTimes={count}/>



                 {faces.map(function(name, index){
                    if ( frontFaces.length === 2 &&  (frontFaces[1].value === frontFaces[0].value) ){
                    return  <Card key={index} display={true} frontImage={`${name}`} clicked={cardClickHandler} clickTimes={count} /> 
                    } else {
                    return  <Card key={index} frontImage={`${name}`} clicked={cardClickHandler} clickTimes={count} /> 
                    }
                    })}

        <div className= {`card ${props.matched ? `matched` : null}  ${rotate ? `rotate` : null} `}  onClick={clickFlipHandler}>
