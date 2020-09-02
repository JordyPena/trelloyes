import React from "react"
import Card from "./Card"
import "./list.css"

function List(props) {
  return(
    <section className="List">
      <header className="List-header">
        <h2>
          {props.header}
        </h2>
      </header>
      <div className="List-cards">
        {props.cards.map((card, ndx) => <Card key={card.id} currentList={props.currentList} title={card.title} content={card.content} listener={props.listener} index={ndx}/>)}
        <button onClick={() => {props.newCard(props.currentList)}}>Add new card</button>
      </div>
    </section>
  )
}


export default List;