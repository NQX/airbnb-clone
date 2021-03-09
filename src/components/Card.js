import React from 'react'
import '../style/Card.css'
import { Link } from 'react-router-dom';

function Card({ src, title, description, price, link }) {
    return (
        <Link to={link}>
        <div className="card">
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
        </div>
        </Link>
    )
}

export default Card
