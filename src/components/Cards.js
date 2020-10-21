import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>WHERE WOULD YOU LIKE TO ESCAPE TO?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../images/korea.jpg'
              text='Explore the neon cities of South Korea at night'
              label='Vibrant'
              path='/services'
            />
            <CardItem
              src='../images/taste.jpg'
              text='Feast on the unique flavors of India.'
              label='Taste'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../images/nzealand.jpg'
              text='Trek through the natural beauty of the New Zealand landscape.'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='../images/aruba.jpg'
              text='Soak up the sunshine on the beaches of Aruba.'
              label='Coastal'
              path='/products'
            />
            <CardItem
              src='../images/louvre'
              text='Marvel at the exquisite art on display in the Louvre.'
              label='Culture'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;