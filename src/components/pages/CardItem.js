import React from 'react';
import {Link} from 'react-router-dom'

function CardItem() {
    return (
        <div>
            <li className="cards_item">
                <Link className="card_item_link" to={props.path}>
                    <figure className="cards_item_pic-wrap" data-category={props.label}>
                        <smg src={props.src} alt="Travel Image" className="cards_item_img" />
                    </figure>
                    <div className="cards_item_info">
                        <h5 className="cards_item_text">{props.text}</h5>
                    </div>
            </li>
        </div>
    )
}

export default CardItem