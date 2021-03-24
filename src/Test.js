import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import SearchPage from './SearchPage';
import axios from 'axios';
import './style/Map.css';



function Test() {

  const [results, setResults] = useState(null);

useEffect(() => {
    axios.get('http://ticket.dunkelheit.net/api/tickets')
        .then(data => {
            setResults(data.data);
        })
}, [])




const center = { lat: 52.467770, lng: 13.391050 };

  const AnyReactComponent = ({ text, data }) => (
    <div className="marker" data-id={data}>
      {text}
    </div>
  );

  if(!results) {
    return <div>loading</div>
}


    return (
        <div style={{ display: 'flex', width: '100%'}}>
            <div style={{width: '60vw'}}>
            <SearchPage results={results}/>
            </div>

        
        
        <div style={{position: 'sticky', top: 50, width: '40vw', height: '90vh'}}>
        <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyC4SEqFV-f2PaK5aw44zksmqYUEx-aZ4Kw" }}
                defaultCenter={center}
                defaultZoom={10}
                options={(maps) => ({
                    scrollwheel: true,
                    panControl: true
                })}
            >



           { results && results.map( result => {
            return(

            <AnyReactComponent 
              lat={result.long_address.lat} 
              lng={result.long_address.lon} 
              data={result.id}
              text={'Desk'} 
           />

            )
          })}
             
          

            </GoogleMapReact>
      </div>

      </div>
      
    )
}

export default Test
