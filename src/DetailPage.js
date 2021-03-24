import React, { useEffect, useState } from 'react'
import BookingBox from './components/BookingBox'
import './style/DetailPage.css'
import GoogleMapReact from 'google-map-react'
import MyCalendar from './components/MyCalendar'
import TimePicker from './components/TimePicker'
import Rating from './components/Rating'

import axios from 'axios'
import { useParams } from 'react-router'


import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Tooltip } from "@material-ui/core";


//   const latlng = {
//     lat: -33.8148145,
//     lng: 151.1663935
//   };

  const AnyReactComponent = ({ text, data }) => (
    <div className="marker" data-id={data}>
      {text}
    </div>
  );


function DetailPage({props}) {
    const [results, setResults] = useState(null);

    const {id} = useParams()


    useEffect(() => {
        axios.get(`http://ticket.dunkelheit.net/api/tickets/${id}`)
            .then(data => {
                setResults(data.data)

            })
    }, [])


    if(!results) {
        return <div>loading</div>
    }
    
    return (
        <div className="detailPage">

            <div className="titleBar">
                <h1>{ results.title }</h1>
                <div className="bottomInfos">
                    <p>*{results.rating} (49 Bewertungen)</p>
                    <span className="dot-seperator">·</span>
                    <p>Teambüro</p>
                    <span className="dot-seperator">·</span>
                    <p>Berlin - Deutschland</p>
                </div>
            </div>
            <div className="gallery">
                <div className="gallery__left">
                    <img className="image image__left" src={results.mainImage} />
                </div>
                 <div className="gallery__middle">
                    <img className="image image__middle__top" src={results.images[0].image.url} />
                    <img className="image image__middle__bottom" src={results.images[1].image.url} />
                </div>
                <div className="gallery__right">
                    <img className="image image__right image__right__top" src={results.images[2].image.url} />
                    <img className="image image__right image__right__bottom" src={results.images[3].image.url} />
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
                        <p>{results.description}</p>
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
                    <div className="rating-btn-more">Zeige alle 12 Austattungsdetails</div>

                    </div>

                    <div className="calendar detail-box-padding">
                        <h2>Wähle ein Startdatum aus</h2>
                        <p>Mindestbuchung: 2 Stunden</p>

                        {/* <img src={'./images/calendar.png'} width="100%"alt=""/> */}
                        <div className="calendar-container">
                            <MyCalendar />
                            <TimePicker />
                        </div>
                        <a href="#">Buchungsdaten löschen</a>
                    </div>
                    
                </div>
                <div className="detailPage__body__right">
                    <div className="BookingBox__wrapper">
                        <BookingBox />
                    </div>
                </div>
            </div>


            <div className="rating detail-box-padding">
                <h2>* 4,62 (100 Bewertungen)</h2>
                <div className="rating-table">
                    <div className="rating-tableLeft">

                        <img src={'./images/rating.png'} alt="" width="85%"/>
                        <Rating />

                        <div className="rating-card">
                            <div className="rating-card-top">
                                <img src={'http://static.yak-juno.net/profile_pictures/1.png'} className="rating-card-img" alt=""/>
                                <div>
                                    <p className="rating-card-name">Safa</p>
                                    <p className="rating-card-date">Oktober 2020</p>
                                </div>
                            </div>
                            <div className="rating-card-bottom">
                                <p>
                                    Tolles Hostel, wir haben uns in der "Bandbude" sehr wohl gefühlt. 
                                    Sie ist sehr charmant und man ist nur paar Sekunden Fußweg von zahlreichen 
                                    Bars und Cafés entfernt. Die Betreiber…<a href="#" className="rating-card-link">Mehr erfahren</a>
                                </p>
                            </div>
                        </div>



                        <div className="rating-card">
                            <div className="rating-card-top">
                                <img src={'http://static.yak-juno.net/profile_pictures/2.png'} className="rating-card-img" alt=""/>
                                <div>
                                    <p className="rating-card-name">Name</p>
                                    <p className="rating-card-date">Oktober 2020</p>
                                </div>
                            </div>
                            <div className="rating-card-bottom">
                                <p>
                                    Tolles Hostel, wir haben uns in der "Bandbude" sehr wohl gefühlt. 
                                    Sie ist sehr charmant und man ist nur paar Sekunden Fußweg von zahlreichen 
                                    Bars und Cafés entfernt. Die Betreiber…<a href="#" className="rating-card-link">Mehr erfahren</a>
                                </p>
                            </div>
                        </div>
                    
                        <div className="rating-card">
                            <div className="rating-card-top">
                                <img src={'http://static.yak-juno.net/profile_pictures/3.png'} className="rating-card-img" alt=""/>
                                <div>
                                    <p className="rating-card-name">Name</p>
                                    <p className="rating-card-date">Oktober 2020</p>
                                </div>
                            </div>
                            <div className="rating-card-bottom">
                                <p>
                                    Tolles Hostel, wir haben uns in der "Bandbude" sehr wohl gefühlt. 
                                    Sie ist sehr charmant und man ist nur paar Sekunden Fußweg von zahlreichen 
                                    Bars und Cafés entfernt. Die Betreiber…<a href="#" className="rating-card-link">Mehr erfahren</a>
                                </p>
                            </div>
                        </div>
                    

                    </div>

                <div className="rating-tableRight">

                    <img src={'./images/rating2.png'} alt="" width="85%"/>


                    <div className="rating-card">
                            <div className="rating-card-top">
                                <img src={'http://static.yak-juno.net/profile_pictures/1.png'} className="rating-card-img" alt=""/>
                                <div>
                                    <p className="rating-card-name">Name</p>
                                    <p className="rating-card-date">Oktober 2020</p>
                                </div>
                            </div>
                            <div className="rating-card-bottom">
                                <p>
                                    Tolles Hostel, wir haben uns in der "Bandbude" sehr wohl gefühlt. 
                                    Sie ist sehr charmant und man ist nur paar Sekunden Fußweg von zahlreichen 
                                    Bars und Cafés entfernt. Die Betreiber…<a href="#" className="rating-card-link">Mehr erfahren</a>
                                </p>
                            </div>
                        </div>


                        <div className="rating-card">
                            <div className="rating-card-top">
                                <img src={'http://static.yak-juno.net/profile_pictures/1.png'} className="rating-card-img" alt=""/>
                                <div>
                                    <p className="rating-card-name">Name</p>
                                    <p className="rating-card-date">Oktober 2020</p>
                                </div>
                            </div>
                            <div className="rating-card-bottom">
                                <p>
                                    Tolles Hostel, wir haben uns in der "Bandbude" sehr wohl gefühlt. 
                                    Sie ist sehr charmant und man ist nur paar Sekunden Fußweg von zahlreichen 
                                    Bars und Cafés entfernt. Die Betreiber…<a href="#" className="rating-card-link">Mehr erfahren</a>
                                </p>
                            </div>
                        </div>
                    



                        <div className="rating-card">
                            <div className="rating-card-top">
                                <img src={'http://static.yak-juno.net/profile_pictures/1.png'} className="rating-card-img" alt=""/>
                                <div>
                                    <p className="rating-card-name">Name</p>
                                    <p className="rating-card-date">Oktober 2020</p>
                                </div>
                            </div>
                            <div className="rating-card-bottom">
                                <p>
                                    Tolles Hostel, wir haben uns in der "Bandbude" sehr wohl gefühlt. 
                                    Sie ist sehr charmant und man ist nur paar Sekunden Fußweg von zahlreichen 
                                    Bars und Cafés entfernt. Die Betreiber…<a href="#" className="rating-card-link">Mehr erfahren</a>
                                </p>
                            </div>
                        </div>
                    


                    </div>


                    

                </div>

                <div className="rating-btn-more">Alle 100 Bewertungen anzeigen</div>

                
            </div>


            <div className="map detail-box-padding">
                <h2>Lage</h2>
                <p className="map-heading">Adresse</p>
                <p className="map-subheading">Sebnitzer Straße 3, 01099 Dresden, Germany</p>
                <div style={{height: '450px'}}>


                { results && 
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyC4SEqFV-f2PaK5aw44zksmqYUEx-aZ4Kw" }}
                    defaultCenter={{lat: results.long_address.lat, lng: results.long_address.lon}}
                    defaultZoom={10}
                    options={(maps) => ({
                        scrollwheel: true,
                        panControl: true
                    })}
                >
     
                    <AnyReactComponent 
                        lat={results.long_address.lat} 
                        lng={results.long_address.lon} 
                        data={results.id}
                        text={'Desk'} 
                    />

                    
        
                </GoogleMapReact>

                }

                </div>

                <div className="map-btn-more">Mehr über den Standort</div>

            </div>

            <div className="host detail-box-padding">
            
                <div className="host-card">
                    <img src={'http://static.yak-juno.net/profile_pictures/1.png'} className="host-card-img" alt=""/>
                    <div className="host-card-top">
                        <div className="host-card-title">Soliwa Personalservice GmbH</div>
                        <div className="host-card-date">Mitglied seit April 2020</div>
                    </div>
                </div>

                <div className="host-table">
                <div className="host-table-left">
                    <div className="host-subSlider">
                        <p>* 221 Bewertungen</p>
                        <p>Superhost</p>
                    </div>
                    <div className="host-textBox-top">
                        Hallo liebe Leute. Ich bin Michael und verreise sehr gern. 
                        Und die Leidenschaft zu reisen hat mich immer wieder in Hostels 
                        geführt, wodurch ich auf die Idee kam ein eigenes Hostel…
                        <a href="#">Mehr erfahren</a>
                    </div>
                    <div className="host-textBox-bottom">
                        <p className="host-bottom-heading">Michael ist sein Superhost</p>
                        <p>
                            Superhosts sind erfahrene, herausragend bewertete Gastgeber, 
                            ie ihren Gästen großartige Aufenthalte bieten.
                        </p>
                    </div>
                </div>

                <div className="host-table-right">
                    <p className="host-tableRight-text">Antwortrate: 100%</p>
                    <p>Antwortzeit: innerhalb weniger Stunden</p>
                    <div className="map-btn-more">Mehr über den Standort</div>
                </div>
                </div>
            </div>


            <div className="more-locations">
                <h2>Weitere Unterkuenfte</h2>
                <div className="smallcards-container">

                    <div className="smallcard">
                        <img src="https://thespaces.com/wp-content/uploads/2016/08/airbnb-samara-yoshino-sugi-cedar-house.jpg" alt=""/>
                        <div className="text-rating">Rating</div>
                        <div className="text-line-1">Hotelzimmer - 1 Bett</div>
                        <div className="text-line-2">My Travel House</div>
                        <div className="text-line-3">75€/nacht</div>
                    </div>

                    <div className="smallcard">
                        <img src="https://thespaces.com/wp-content/uploads/2016/08/airbnb-samara-yoshino-sugi-cedar-house.jpg" alt=""/>
                        <div className="text-rating">Rating</div>
                        <div className="text-line-1">Hotelzimmer - 1 Bett</div>
                        <div className="text-line-2">My Travel House</div>
                        <div className="text-line-3">75€/nacht</div>
                    </div>

                    <div className="smallcard">
                        <img src="https://thespaces.com/wp-content/uploads/2016/08/airbnb-samara-yoshino-sugi-cedar-house.jpg" alt=""/>
                        <div className="text-rating">Rating</div>
                        <div className="text-line-1">Hotelzimmer - 1 Bett</div>
                        <div className="text-line-2">My Travel House</div>
                        <div className="text-line-3">75€/nacht</div>
                    </div>

                    <div className="smallcard">
                        <img src="https://thespaces.com/wp-content/uploads/2016/08/airbnb-samara-yoshino-sugi-cedar-house.jpg" alt=""/>
                        <div className="text-rating">Rating</div>
                        <div className="text-line-1">Hotelzimmer - 1 Bett</div>
                        <div className="text-line-2">My Travel House</div>
                        <div className="text-line-3">75€/nacht</div>
                    </div>
                </div>
            </div>

            <div className="cities">
                <h2>Entdecke weitere Städte in der Nähe</h2>
                <p className="cities__more">Weitere Unterkünfte in Frankfurt am Main:</p>
                <div className="cities__more__container">
                    <p>Schreibtische</p>
                    <span className="dot-seperator">·</span>
                    <p>Büros</p>
                    <span className="dot-seperator">·</span>
                    <p>Konferenzräume</p>
                    <span className="dot-seperator">·</span>
                    <p>Hotelzimmer</p>
                </div>
                <div className="city-table">
                    <div className="city-table-cell">
                        <div className="city-table-cell">Darmstadt</div>
                        <div className="city-table-cell">Offenbach</div>
                        <div className="city-table-cell">Mainz</div>

                    </div>

                    <div className="city-table-cell">
                        <div className="city-table-cell">Mannheim</div>
                        <div className="city-table-cell">Heidelberg</div>
                        <div className="city-table-cell">Würzburg</div>
                    </div>

                    <div className="city-table-cell">
                        <div className="city-table-cell">Kaiserslautern</div>
                        <div className="city-table-cell">Fulda</div>
                        <div className="city-table-cell">Bamberg</div>
                    </div>

                    <div className="city-table-cell">
                        <div className="city-table-cell">Nürnberg</div>
                        <div className="city-table-cell">Wuppertal</div>
                        <div className="city-table-cell">Berlin</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DetailPage
