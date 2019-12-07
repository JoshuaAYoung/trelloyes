import React from 'react';
import Card from './Card'
import './list.css';

export default function List(props) {
    return (
        <section className='List'>
            <header className='List-head'>
            <h2>{props.header}</h2>
            </header>
            
        <div className='List-Cards'>
            {props.cards.map((card) =>
            <Card
              title={card.title}
              content={card.content}
            />
          )}
          <button
            type='button'
            className='List-add-button'
          >
            + Add Random Card
          </button>
        </div>
      </section>
    )
  }

