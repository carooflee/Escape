import React from 'react';
import CardItem from './CardItem'
import "./Cards.css"; 

function Cards() {
    return (
        <div className='cards'>
            <h1> Where would you like to escape to?</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem 
                        src="image link goes here"
                        text="description of place goes here"
                        label="Adventure"
                        />
                        <CardItem 
                        src="image link goes here"
                        text="description of place goes here"
                        label="Adventure"
                        path="/services"
                        />
                    </ul>
                    <ul className="cards_items">
                        <CardItem 
                        src="image link goes here"
                        text="description of place goes here"
                        label="Adventure"
                        />
                        <CardItem 
                        src="image link goes here"
                        text="description of place goes here"
                        label="Adventure"
                        path="/services"
                        />
                        <CardItem 
                        src="image link goes here"
                        text="description of place goes here"
                        label="Adventure"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards