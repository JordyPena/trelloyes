import React from "react"
import "./card.css"


function Card(props) {
  return (    
    <div className="Card">
      <h3>
        {props.title}
      </h3>
      <p>
        {props.content}
      </p>
      <button onClick={() => props.listener(props.index, props.currentList)}>Delete</button>
    </div>
  ) 
    
}

export default Card;


