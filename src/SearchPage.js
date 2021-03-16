import React, { useEffect } from 'react'
import './style/SearchPage.css'
import { Button } from '@material-ui/core'
import SearchResult from './SearchResult'

import axios from 'axios'

function SearchPage() {

    useEffect(() => {
        axios.get('http://localhost:3003/api/tickets')
            .then(data => {
                console.log(data)
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
            <SearchResult img="https://lokcom.net/wp-content/uploads/2019/09/airbnb-apartment-Ultimate-checklist-to-start-renting-your-flat-on-Airbnb-800x451.jpg"
                            location="Private room in center of Paris"
                            title="Edwardian House"
                            description="1 guets - 1 bedroom - 1.5 bedrooms shared - bathroom - wifi - kitchen - Free parking - Washing machine"
                            star={4.73}
                            price="€23/night"
                            total="€66 total"
                            />
             <SearchResult img="https://lokcom.net/wp-content/uploads/2019/09/airbnb-apartment-Ultimate-checklist-to-start-renting-your-flat-on-Airbnb-800x451.jpg"
                            location="Private room in center of Paris"
                            title="Edwardian House"
                            description="1 guets - 1 bedroom - 1.5 bedrooms shared - bathroom - wifi - kitchen - Free parking - Washing machine"
                            star={4.73}
                            price="€23/night"
                            total="€66 total"
                            />
             <SearchResult img="https://lokcom.net/wp-content/uploads/2019/09/airbnb-apartment-Ultimate-checklist-to-start-renting-your-flat-on-Airbnb-800x451.jpg"
                            location="Private room in center of Paris"
                            title="Edwardian House"
                            description="1 guets - 1 bedroom - 1.5 bedrooms shared - bathroom - wifi - kitchen - Free parking - Washing machine"
                            star={4.73}
                            price="€23/night"
                            total="€66 total"
                            />
        </div>
    )
}

export default SearchPage
