import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimateSharedLayout } from "framer-motion"

function CardItem(props) {
    let cardsAnimation = {
        hidden: {
            x: '-100%',
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: '1'
        }
    }   
    return ( 
        <>
            <motion.li 
            initial='hidden'
            whileInView='visible'
            transition={{duration: 1.5, type: 'spring'}}
            variants={cardsAnimation}
            className="cards__item">
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
            </motion.li>
        </>
     );
}

export default CardItem;