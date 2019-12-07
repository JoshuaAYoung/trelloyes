import React from 'react';
import Card from 'card';
import List from 'list';


function App(props) {
  const listItem = STORE.lists.map(List);
  return (
    <main class="App">
      <header class="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div class="App-list">
        
      </div>
    </main>
  );
}

export default App;