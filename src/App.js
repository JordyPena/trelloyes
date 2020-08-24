import React from 'react';
import List from './List';
import './app.css'



function App(props) {
  return (
    <main className="App">
      <header className="App-header">
        <h1>

        </h1>
      </header>

      <div className="App-list">
  {props.store.lists.map(list => {
    let cards = list.cardIds.map(item => props.store.allCards[item])
    return <List header={list.header} cards={cards}/>
  })}

      </div>
    
    </main>
  )

}

export default App;
