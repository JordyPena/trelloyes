import React from "react";
import List from "./List";
import "./app.css";
import STORE from "./store.js";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: STORE,
    };

  }

  deletingListener = (cardIndex, listIndex) => {
    console.log(cardIndex, listIndex)
    let newList = this.state.store.lists[listIndex].cardIds.filter((card, index) => 
      index !== cardIndex)

    const newSTORE = this.state.store
    newSTORE.lists[listIndex].cardIds = newList

    this.setState({
      store: newSTORE
    }) 
          
  }

  //finsih adding a random card function
  newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ` + id,
      content: "lorem ipsum",
    }
  }

  newCardListener = (listIndex) => {
    let card = this.newRandomCard()
    console.log(card)
    
    const newSTORE = this.state.store
    newSTORE.lists[listIndex].cardIds.push(card.id)
    newSTORE.allCards[card.id] = card
    this.setState({
      store: newSTORE
    })
  }
  
  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1></h1>
        </header>

        <div className="App-list">
          {this.state.store.lists.map((list, ndx) => {
            let cards = list.cardIds.map((item) => this.state.store.allCards[item]);
            return <List key={list.id} currentList={ndx} header={list.header} cards={cards} listener={this.deletingListener} newCard={this.newCardListener}/>;
          })}
        </div>
      </main>
    );
  }
}

export default App;
