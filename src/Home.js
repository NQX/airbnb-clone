import React from 'react'
import './style/Home.css'
import Banner from './components/Banner'
import Card from './components/Card'

function Home() {
    return (
        <div className="home">
            <Banner />
            <div className="home__section">
                <Card src="https://lokcom.net/wp-content/uploads/2019/09/airbnb-apartment-Ultimate-checklist-to-start-renting-your-flat-on-Airbnb-800x451.jpg"
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts"/>

                <Card src="https://lokcom.net/wp-content/uploads/2019/09/airbnb-apartment-Ultimate-checklist-to-start-renting-your-flat-on-Airbnb-800x451.jpg"
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts"/>

                <Card src="https://lokcom.net/wp-content/uploads/2019/09/airbnb-apartment-Ultimate-checklist-to-start-renting-your-flat-on-Airbnb-800x451.jpg"
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts"/>
                
            </div>
            <div className="home__section">
                <Card src="https://lokcom.net/wp-content/uploads/2019/09/airbnb-apartment-Ultimate-checklist-to-start-renting-your-flat-on-Airbnb-800x451.jpg"
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts"
                    price="€314/night" />

                <Card src="https://lokcom.net/wp-content/uploads/2019/09/airbnb-apartment-Ultimate-checklist-to-start-renting-your-flat-on-Airbnb-800x451.jpg"
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts"
                    price="€314/night" />

                <Card src="https://lokcom.net/wp-content/uploads/2019/09/airbnb-apartment-Ultimate-checklist-to-start-renting-your-flat-on-Airbnb-800x451.jpg"
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts"
                    price="€314/night"/>
            </div>
        </div>
    )
}

export default Home
