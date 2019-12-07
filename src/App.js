import React from 'react';
import List from './List.js';
import './App.css';

function App(props) {
  
  return (
    <main class="App">
      <header class="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div class="App-list">
        {props.store.lists.map((list) =>
            <List
            header={list.header}
            cards={list.cardIds.map(id => props.store.allCards[id])}
            key={list.id}
            />
        )}
      </div>
    </main>
  );
}

export default App;