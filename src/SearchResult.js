import { Favorite } from '@material-ui/icons'
import React from 'react'
import './style/SearchResult.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import StarIcon from '@material-ui/icons/Star'
import { Link } from 'react-router-dom';


function SearchResult({ 
    img,
    shortText,
    title,
    description,
    star,
    price,
    total,
    link
 }) {
    return (
        <Link to={`/detail/${link}`}>
        <div className="searchResult">
            <img src={img} alt="" />
            <FavoriteBorderIcon className="searchResult__heart" />
            <div className="searchResult__info">
                <div className="searchResult__infoTop">
                    <p>{shortText}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>
                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p><strong>{star}</strong></p>
                    </div>
                    <div className="searchResult__price">
                        <h2>€{price}/hour</h2>
                        <p>{total}p</p>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default SearchResult
