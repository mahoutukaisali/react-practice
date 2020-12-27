import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

/* A default value of CardList. It can be over written in App.js 
  - map() is a function which iterate inside of state function.
  - monster is a new function 
  - id is added in order to identify which html elements need to render/change so that react 
    does not need to render everythings of elements when a id is changed. */
export const CardList = (props) => {
  return (<div className='card-list'>
    {
        props.monsters.map(monster => (
            <Card key={monster.id} monster={monster}/> 
        ))
    }
  </div>)
}