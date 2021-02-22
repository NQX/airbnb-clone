import React from 'react'
import '../style/BookingBox.css'
import { Button } from '@material-ui/core'

function BookingBox() {
    return (
        <div className="BookingBox">
            <div>18€</div>
            
                <Button>Search AirBnb</Button>
            
            <div>du must noch nichgts bezhale</div>
            <div>12x 18€ pro nacg</div>
            <div>Total: 113€</div>
        </div>
    )
}

export default BookingBox
