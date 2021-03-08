import React from 'react'
import '../style/BookingBox.css'
import { Button } from '@material-ui/core'

function BookingBox() {
    return (
        <div className="BookingBox">
            <div className="bookingBox-heading">Wähle deine Reisedaten aus, damit 
                wir dir den Preis anzeigen können
            </div>
            
            <div className="input-box">
                <div className="inputs-top">
                    <div className="booking-input-topLeft">
                        <p className="booking-input-date">Start Datum</p>
                        <p className="booking-input-text">Datum auswählen</p>
                    </div>
                    <div className="booking-input-topRight">
                        <p className="booking-input-date">End Datum</p>
                        <p className="booking-input-text">Datum auswählen</p>
                    </div>
                </div>
                <div className="booking-input-bottom">Gasete</div>
            </div>

            <Button>Search AirBnb</Button>
            
            <div className="bookingBox-bottomText">Gib deine Reisedaten ein, um den Gesamtpreis pro Nacht zu sehen.</div>
        </div>
    )
}

export default BookingBox
