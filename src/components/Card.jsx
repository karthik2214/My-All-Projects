import React from 'react';


const Card = (props) => {
  
  return (
    <>
   <div className="box">
    <img src={props.imgsrc} alt="luffy" />
    <div className="box-content">
      <h3>{props.title}</h3>
      <a className="btn" rel="noreferrer" href={props.link}>Demo of this site</a>
      <a className="btn" rel="noreferrer" href={props.gitlink}>Source code</a>
  </div>
  </div>
    </>
    )
}

export default Card;