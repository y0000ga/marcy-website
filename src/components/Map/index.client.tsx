'use client'

import { IDiscount } from '@/type/discount.type'
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
} from '@react-google-maps/api'
import { useState } from 'react'
import { Discount } from '../DiscountCollection/index.client'

const center = { lat: 24.985859218125146, lng: 120.20513028560073 }

const containerStyle = {
  width: '100%',
  height: '350px',
}

interface IProps {
  discounts: IDiscount[]
}

export const Map = ({ discounts }: IProps) => {
  const [selectedMarker, setSelectedMarker] = useState<IDiscount>()
  const [isInfoShown, setIsInfoShown] = useState(false)
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_API_KEY,
  })
  if (!isLoaded) return <div>Loading...</div>
  return (
    <GoogleMap zoom={7} center={center} mapContainerStyle={containerStyle}>
      <>
        {discounts.map((discount) =>
          discount.location ? (
            <MarkerF
              key={discount.title}
              icon={{
                path: google.maps.SymbolPath.CIRCLE,
                strokeColor: discount.color,
                scale: 7,
              }}
              position={discount.location}
              onClick={() => {
                setSelectedMarker(discount)
                setIsInfoShown(true)
              }}
            />
          ) : null
        )}
        {isInfoShown && selectedMarker !== undefined && (
          <InfoWindowF
            position={selectedMarker.location}
            onCloseClick={() => setIsInfoShown(false)}
          >
            <Discount
              title={selectedMarker.title}
              type={selectedMarker.type}
              url={selectedMarker.url}
              service={selectedMarker.service}
              offer={selectedMarker.offer}
              colorClass={selectedMarker.colorClass}
              isList={false}
            />
          </InfoWindowF>
        )}
      </>
    </GoogleMap>
  )
}
