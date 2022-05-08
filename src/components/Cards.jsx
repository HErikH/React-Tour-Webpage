import React from 'react';
import CardItem from './CardItem';
import img_2 from '../images/img-2.jpg'
import img_3 from '../images/img-3.jpg'
import img_4 from '../images/img-4.jpg'
import img_8 from '../images/img-8.jpg'
import img_9 from '../images/img-9.jpg'

function Cards() {
    return ( 
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src={img_9}
                        label="Adventure"
                        text="Explore the hidden waterfall deep
                        inside the Amazon Jungle"
                        path="/services"
                        />
                        <CardItem
                        src={img_2}
                        label="Luxury"
                        text="Travel through the Islands 
                        of Bali in a Private Cruise"
                        path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src={img_3}
                        label='Mystery'
                        text='Set Sail in the Atlantic Ocean 
                        visiting Uncharted Waters'
                        path='/services'
                        />
                        <CardItem
                        src={img_4}
                        label='Adventure'
                        text='Experience Football on Top 
                        of the Himilayan Mountains'
                        path='/products'
                        />
                        <CardItem
                        src={img_8}
                        label='Adrenaline'
                        text='Ride through the Sahara Desert 
                        on a guided camel tour'
                        path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default Cards;