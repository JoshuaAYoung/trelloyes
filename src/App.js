import React from 'react';
import List from './List.js';
import './App.css';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}


function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
      key === keyToOmit ? newObj : { ...newObj, [key]: value },
    {}
  );
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { store: this.props.store }
  }

  // deleteCard = (listIndex, cardKey) => {
  deleteCard = (cardKey) => {
    // const newLists = this.state.lists[listIndex].cardIds.filter(id => id === cardKey)
    // this.setState({
    //   lists: newLists
    // })
    const newCards = omit(this.state.allCards, cardKey);
    this.setState({
      allCards: newCards
    })
    console.log(this.state)
  }

  addCard = (listId) => {
    const newCard = newRandomCard()

    const newList = this.state.lists.map(list => {
      if (list.id === listId) {
        return {
          list, cardIds: [list.cardIds, newCard.id]
        };
      }
      return list;
    })
  }




    render() {
      console.log(this.state)
      return (
        <main className="App">
          <header className="App-header">
            <h1>Trelloyes!</h1>
          </header>
          <div className="App-list">
            {this.state.store.lists.map((list) =>
              <List
                header={list.header}
                cards={list.cardIds.map(id => this.state.store.allCards[id])}
                key={list.id}
                deleteCard={this.deleteCard}
                addCard={this.addCard}
              />
            )}
          </div>
        </main>
      );
    }
  }

  





    export default App;