import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
    return ( 
        <>
            <li className="cards__item">
                <Link to={props.path} className="cards__link">
                    <figure 
                    className="cards__pic-wrap" 
                    data-category={props.label}>
                        <img src={props.src} alt="Travel Picture" 
                        className="cards__img" />
                    </figure>
                    <div className="cards__info">
                        <h5 className="cards__text">
                        {props.text}
                        </h5>
                    </div>
                </Link>
            </li>
        </>
     );
}

export default CardItem;