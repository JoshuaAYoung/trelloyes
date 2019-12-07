import React from 'react';
import List from './List.js';


function App(props) {
  return (
    <main class="App">
      <header class="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div class="App-list">
        {console.log(props.lists)}
        {props.lists.map((list) =>
            <List
            header={list.header}
            cards={list.cards}
            key={list.id}
          />
        )}
      </div>
    </main>
  );
}

export default App;