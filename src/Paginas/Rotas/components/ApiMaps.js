import React from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import "./ApiMaps.css"

function Rotas () {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDgRF6XSSexjTOrFNNZfYFPzTmoGfKG6rk"
  })
  return (
    <div className="maps">
      {isLoaded ? (
      <GoogleMap
        mapContainerStyle={{width: "100%", height: "100%"}}
        center={{
          lat: -23.554489,
          lng: -46.743870
        }}
        zoom={15}
      >
      </GoogleMap>
  ) : <></>
}
    </div>
  )
};

export default Rotas;