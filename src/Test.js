import React from 'react'
import GoogleMapReact from 'google-map-react'
import SearchPage from './SearchPage';



const center = { lat: -25.585241, lng: 133.775136 };

  const AnyReactComponent = ({ text }) => (
    <div style={{
      color: 'white', 
      background: 'grey',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }}>
      {text}
    </div>
  );

function Test() {
  const center = { lat: -25.585241, lng: 151.1663935 };

    return (
        <div style={{ display: 'flex', width: '100%'}}>
            <div style={{width: '60vw'}}>
            <SearchPage />
            </div>

        
        
        <div style={{position: 'sticky', top: 50, width: '40vw', height: '90vh'}}>
        <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyC4SEqFV-f2PaK5aw44zksmqYUEx-aZ4Kw" }}
                defaultCenter={center}
                defaultZoom={8}
                options={(maps) => ({
                    scrollwheel: true
                })}
            >
            <AnyReactComponent 
                lat={-25.955413} 
                lng={150.337844} 
                text={'Kreyser Avrora'} 
            />

            <AnyReactComponent 
                lat={-26.955413} 
                lng={150.337844} 
                text={'Kreyser Avrora'} 
            />

            </GoogleMapReact>
      </div>

      </div>
      
    )
}

export default Test
