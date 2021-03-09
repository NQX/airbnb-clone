import React, { useState } from 'react'
import '../style/Banner.css'
import { Button } from '@material-ui/core'
import Search from '../components/Search'
import { useHistory } from 'react-router-dom'


function Banner() {
    const [showSearch, setShowSearch] = useState(false)
    const history = useHistory()

    return (
        <div style={{backgroundImage: 'url("./images/office.jpg")'}} className="banner">
            <div className="banner__search">
                {showSearch && <Search />}
                <Button onClick={() => setShowSearch(!showSearch)} 
                        className="banner__searchButton" 
                        variant="outlined">{showSearch ? 'Hide' : 'Search Dates'}</Button>
            </div>
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of gateway to uncover
                    the hidden gems near you.
                </h5>
                <Button onClick={() => {history.push('/search')}} variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
