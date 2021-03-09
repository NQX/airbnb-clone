import React from 'react'
import './style/Home.css'
import Banner from './components/Banner'
import Card from './components/Card'

function Home() {
    return (
        <div className="home">
            <Banner />

            <div className="lowerBanner">Das neue Homeoffice</div>


            <div className="home__section">
                <Card src="https://lokcom.net/wp-content/uploads/2019/09/airbnb-apartment-Ultimate-checklist-to-start-renting-your-flat-on-Airbnb-800x451.jpg"
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts"
                    />

                <Card src="https://lokcom.net/wp-content/uploads/2019/09/airbnb-apartment-Ultimate-checklist-to-start-renting-your-flat-on-Airbnb-800x451.jpg"
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts"/>

                <Card src="https://lokcom.net/wp-content/uploads/2019/09/airbnb-apartment-Ultimate-checklist-to-start-renting-your-flat-on-Airbnb-800x451.jpg"
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts"/>
                
            </div>


            <div className="four-section">
                <h2>Entdecke neue Orte</h2>
                
                <div className="four-selection-container">
                    <div className="four-card">
                        <img src={'./images/private-office.jpg'} alt="" />
                        <p>Private Offices</p>
                    </div>

                    <div className="four-card">
                        <img src={'./images/open-office.jpg'} alt="" />
                        <p>Open Offices</p>
                    </div>

                    <div className="four-card">
                        <img src={'./images/meeting-room.jpg'} alt="" />
                        <p>Meeting Rooms</p>
                    </div>

                    <div className="four-card">
                        <img src={'./images/other-locations.jpg'} alt="" />
                        <p>Other Locations</p>
                    </div>
                </div>

            </div>


            <div className="photo-banner">
                <div style={{backgroundImage: 'url("./images/office.jpg")'}} className="photo-card">
                    <h2>Teile deine Welt</h2>
                    <p>Verwandle deinen freien Wohnraum in deine <br/>nächste Chance.</p>
                    <button className="photo-banner-btn">Gastgeber werden</button>
                </div>
            </div>




            <div className="home__section">
                <Card src="https://lokcom.net/wp-content/uploads/2019/09/airbnb-apartment-Ultimate-checklist-to-start-renting-your-flat-on-Airbnb-800x451.jpg"
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts"
                    price="€314/night"
                    link="/detail"/>

                <Card src="https://lokcom.net/wp-content/uploads/2019/09/airbnb-apartment-Ultimate-checklist-to-start-renting-your-flat-on-Airbnb-800x451.jpg"
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts"
                    price="€314/night"
                    link="/detail"/>

                <Card src="https://lokcom.net/wp-content/uploads/2019/09/airbnb-apartment-Ultimate-checklist-to-start-renting-your-flat-on-Airbnb-800x451.jpg"
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts"
                    price="€314/night"
                    link="/detail"/>
            </div>
        </div>
    )
}

export default Home
