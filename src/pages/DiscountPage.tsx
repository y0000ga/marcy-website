import React from 'react'
import MainWrapper from '../Layout/MainWrapper'
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
} from '@react-google-maps/api'
import { useState } from 'react'

const center = { lat: 25.02667202002662, lng: 121.52241509353283 }
const markers = [
  {
    name: 'location-1',
    location: { lat: 25.030043691283673, lng: 121.53623767610965 },
  },
  {
    name: 'location-2',
    location: { lat: 25.02667202002662, lng: 121.52241509353283 },
  },
]
const Map = () => {
  const containerStyle = {
    width: '350px',
    height: '350px',
  }
  const [selectedMarker, setSelectedMarker] = useState<{
    name: string
    location: { lat: number; lng: number }
  }>()
  const [isInfoShown, setIsInfoShown] = useState(false)
  return (
    <GoogleMap zoom={12} center={center} mapContainerStyle={containerStyle}>
      {markers.map((data) => (
        <div key={data.name}>
          <MarkerF
            position={data.location}
            onClick={() => {
              setSelectedMarker(data)
              setIsInfoShown(true)
            }}
          />
          {isInfoShown && selectedMarker !== undefined && (
            <InfoWindowF
              position={selectedMarker.location}
              onCloseClick={() => {
                setIsInfoShown(false)
              }}
            >
              <h1>{selectedMarker.name}</h1>
            </InfoWindowF>
          )}
        </div>
      ))}
    </GoogleMap>
  )
}

const DiscountPage: React.FC = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBdSDIkzu_cKFs2lIsEg2VjFpndkg2_qro',
  })
  if (!isLoaded) return <div>Loading...</div>
  return (
    <MainWrapper>
      <Map />
    </MainWrapper>
  )
}

export default DiscountPage
