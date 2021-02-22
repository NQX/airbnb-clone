import React from 'react'
import GoogleMapReact from 'google-map-react'
import SearchPage from './SearchPage';




const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }

  const AnyReactComponent = ({ text }) => <div>{text}</div>;
    

function Test() {
    return (
        <div style={{ display: 'flex', width: '100%'}}>
            <div style={{width: '60vw'}}>
            <SearchPage />
            </div>

        
        
        <div style={{position: 'sticky', top: 50, width: '40vw', height: '90vh'}}>
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

      </div>
      
    )
}

export default Test
