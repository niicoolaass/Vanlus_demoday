import React from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import "./MapsApi.css"

function MapPage () {
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
          lat: -23.526889,
          lng: -46.693278
        }}
        zoom={15}
      >
      </GoogleMap>
  ) : <></>
}
    </div>
  )
};

export default MapPage;