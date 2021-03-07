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
                <h1>Seafront flat</h1>
                <div className="bottomInfos">
                    <p>*4.89 (49 Bewertungen)</p>
                    <span className="dot-seperator">·</span>
                    <p>Superhost</p>
                    <span className="dot-seperator">·</span>
                    <p>Ratingen, Nordrhein-Westfalen, Deutschland</p>
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
                </div> 
            </div>
            <div className="detailPage__body">
                <div className="detailPage__body__left">
                    <div className="detailPage__body__heading">
                        <h2>Privatzimmer in Haus · Gastgeber: Darren</h2>
                        <div className="bottomInfos">
                            <p>2 Gaeste</p>
                            <span className="dot-seperator">·</span>
                            <p>1 Schlafzimmer</p>
                            <span className="dot-seperator">·</span>
                            <p>2 Betten</p>
                            <span className="dot-seperator">·</span>
                            <p>1 Badezimmer</p>
                        </div>
                    </div>
                    <div className="detailPage__body__text detail-box-padding">
                        <p>
                            A very bright,cosy & unique rustic townhouse,with DIY pallet art and home decor,situated in the heart of Birkirkara; 
                            Centre of Malta. All guests have access to a well-sized terrace &large roof with views, good WiFisystem &outdoor plugs. 
                            Bus stops that go to Valletta &other tourist destinations are only 5 minutes away from this place. It's ideal for young, 
                            solo travellers or couple looking for short stay accommodation… 

                            A very bright,cosy & unique rustic townhouse,with DIY pallet art and home decor,situated in the heart of Birkirkara; 
                            Centre of Malta. All guests have access to a well-sized terrace &large roof with views, good WiFisystem &outdoor plugs. 
                            Bus stops that go to Valletta &other tourist destinations are only 5 minutes away from this place. It's ideal for young, 
                            solo travellers or couple looking for short stay accommodation… 

                            A very bright,cosy & unique rustic townhouse,with DIY pallet art and home decor,situated in the heart of Birkirkara; 
                            Centre of Malta. All guests have access to a well-sized terrace &large roof with views, good WiFisystem &outdoor plugs. 
                            Bus stops that go to Valletta &other tourist destinations are only 5 minutes away from this place. It's ideal for young, 
                            solo travellers or couple looking for short stay accommodation… 
                        </p>
                    </div>
                    <div className="equipment detail-box-padding">
                        <h2>Ausstattung</h2>
                        <div className="equipment__box">
                            <div className="equipment__box__left">
                                <div className="equipment__box__item">Waschmaschine</div>
                                <div className="equipment__box__item">WLAN</div>
                                <div className="equipment__box__item">Erste Hilfe Set</div>
                            </div>
                            <div className="equipment__box__right">
                                <div className="equipment__box__item">Waschmaschine</div>
                                <div className="equipment__box__item">WLAN</div>
                                <div className="equipment__box__item">Erste Hilfe Set</div>
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
