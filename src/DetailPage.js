import React from 'react'
import BookingBox from './components/BookingBox'
import './style/DetailPage.css'
import GoogleMapReact from 'google-map-react'



const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }

  const AnyReactComponent = ({ text }) => <div>{text}</div>;


function DetailPage() {
    return (
        <div className="detailPage">
            <div className="titleBar">
                <h1>Soliwa Personalservice GmbH</h1>
                <div className="bottomInfos">
                    <p>*4.89 (49 Bewertungen)</p>
                    <span className="dot-seperator">·</span>
                    <p>Teambüro</p>
                    <span className="dot-seperator">·</span>
                    <p>Berlin - Deutschland</p>
                </div>
            </div>
            <div className="gallery">
                <div className="gallery__left">
                    <img className="image image__left" src="https://thespaces.com/wp-content/uploads/2016/08/airbnb-samara-yoshino-sugi-cedar-house.jpg" />
                </div>
                 <div className="gallery__middle">
                    <img className="image image__middle" src="https://thespaces.com/wp-content/uploads/2016/08/airbnb-samara-yoshino-sugi-cedar-house.jpg" />
                    <img className="image image__middle" src="https://thespaces.com/wp-content/uploads/2016/08/airbnb-samara-yoshino-sugi-cedar-house.jpg" />
                </div>
                <div className="gallery__right">
                    <img className="image image__right image__right__top" src="https://thespaces.com/wp-content/uploads/2016/08/airbnb-samara-yoshino-sugi-cedar-house.jpg" />
                    <img className="image image__right image__right__bottom" src="https://thespaces.com/wp-content/uploads/2016/08/airbnb-samara-yoshino-sugi-cedar-house.jpg" />
                    <div className="btn-gallery-more">Alle Bilder</div>
                </div> 
            </div>
            <div className="detailPage__body">
                <div className="detailPage__body__left">
                    <div className="detailPage__body__heading">
                        <h2>Unser Space</h2>
                        <div className="bottomInfos">
                            <p>Friedrichstr. 117</p>
                            <span className="dot-seperator">·</span>
                            <p>Aufgang B</p>
                            <span className="dot-seperator">·</span>
                            <p>10117 Berlin</p>
                            <span className="dot-seperator">·</span>
                            <p>Deutschland</p>
                        </div>
                    </div>
                    <div className="detailPage__body__text detail-box-padding">
                        <p>
                        Ergonomischer Stuhl mit Tisch in geräumigen, hellen Raum. Drucker, 
                        WLAN, Küche und Toilette, Café und Kantine, nette Menschen aus IT, 
                        HR und Datenschutz. Sehr gute Anbindung zu öffentlichen Verkehrsmitteln 
                        und es gibt kostenlose Parkplätze.
                        </p>
                    </div>
                    <div className="equipment detail-box-padding">
                        <h2>Ausstattung</h2>
                        <div className="equipment__box">
                            <div className="equipment__box__left">
                                <div className="equipment__box__item">Bike Parking</div>
                                <div className="equipment__box__item">Wifi</div>
                                <div className="equipment__box__item">Ergonomic Chairs</div>
                                <div className="equipment__box__item">Scanner</div>
                            </div>
                            <div className="equipment__box__right">
                                <div className="equipment__box__item">Free Coffee</div>
                                <div className="equipment__box__item">Kitchen</div>
                                <div className="equipment__box__item">Ergonomic Chairs</div>
                                <div className="equipment__box__item">Printer</div>
                            </div>
                        </div>
                    </div>
                    <div>Calendar</div>
                    
                </div>
                <div className="detailPage__body__right">
                    <div className="BookingBox__wrapper">
                        <BookingBox />
                    </div>
                </div>
            </div>
            <div>rating</div>
            <div style={{height: '450px'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDPm1WLTQeH4Gb3PZtK7XyyU5FAas4Wm6s' }}
                defaultCenter={location}
                defaultZoom={12}
            >
              <AnyReactComponent
            lat={37.42216}
            lng={-122.08427}
            text="My Marker"
          />
      </GoogleMapReact>
            </div>
            <div>Host</div>

            
            <div>
                <h2>Weitere Unterkuenfte</h2>
                <div className="smallcards-container">

                    <div className="smallcard">
                        <img src="https://thespaces.com/wp-content/uploads/2016/08/airbnb-samara-yoshino-sugi-cedar-house.jpg" alt=""/>
                        <div>Rating</div>
                        <div>Hotelzimmer - 1 Bett</div>
                        <div>My Travel House</div>
                        <div>75€/nacht</div>
                    </div>

                    <div className="smallcard">
                        <img src="https://thespaces.com/wp-content/uploads/2016/08/airbnb-samara-yoshino-sugi-cedar-house.jpg" alt=""/>
                        <div>Rating</div>
                        <div>Hotelzimmer - 1 Bett</div>
                        <div>My Travel House</div>
                        <div>75€/nacht</div>
                    </div>

                    <div className="smallcard">
                        <img src="https://thespaces.com/wp-content/uploads/2016/08/airbnb-samara-yoshino-sugi-cedar-house.jpg" alt=""/>
                        <div>Rating</div>
                        <div>Hotelzimmer - 1 Bett</div>
                        <div>My Travel House</div>
                        <div>75€/nacht</div>
                    </div>

                    <div className="smallcard">
                        <img src="https://thespaces.com/wp-content/uploads/2016/08/airbnb-samara-yoshino-sugi-cedar-house.jpg" alt=""/>
                        <div>Rating</div>
                        <div>Hotelzimmer - 1 Bett</div>
                        <div>My Travel House</div>
                        <div>75€/nacht</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPage
