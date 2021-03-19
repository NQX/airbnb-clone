import React, { useEffect, useState } from 'react'
import './style/SearchPage.css'
import { Button } from '@material-ui/core'
import SearchResult from './SearchResult'

import axios from 'axios'

function SearchPage() {

    const [results, setResults] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3003/api/tickets')
            .then(data => {
                setResults(data.data);
            })
    }, [])

    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays - 16 august to 30 august - 2 guets</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancelation flexiliby</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>

            { results && results.map( result => {
                return (
                    <SearchResult img={result.mainImage}
                        shortText={result.shortText}
                        title={result.title}
                        description="1 guets - 1 bedroom - 1.5 bedrooms shared - bathroom - wifi - kitchen - Free parking - Washing machine"
                        star={result.rating}
                        price={result.price}
                        total="€66 total"
                        link={result.id}
                    />
                )
            })}
             

          

        </div>
    )
}

export default SearchPage
