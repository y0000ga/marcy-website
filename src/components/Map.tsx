import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
} from '@react-google-maps/api'
import { useState } from 'react'
import DiscountItem from './DiscountItem'
import { useTranslation } from 'react-i18next'
import { googleMapAuth } from '../keyData'

const center = { lat: 24.985859218125146, lng: 120.20513028560073 }

interface MapProps {
  discount: {
    type: string
    title: string
    service: string
    method: string
    content: string
    url: string
    address: string
    location: {
      lat: number
      lng: number
    }
  }[]
}

const Map: React.FC<MapProps> = ({ discount }) => {
  const { t } = useTranslation()
  const onSiteDiscountType = [
    t('discount.selectAll'),
    t('discount.all'),
    t('discountTypeData.0'),
    t('discountTypeData.2'),
    t('discountTypeData.6'),
  ]
  const containerStyle = {
    width: '100%',
    height: '350px',
  }
  const [selectedMarker, setSelectedMarker] = useState<{
    type: string
    title: string
    service: string
    method: string
    content: string
    url: string
    address: string
    location: {
      lat: number
      lng: number
    }
  }>()
  const [isInfoShown, setIsInfoShown] = useState(false)
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapAuth,
  })
  if (!isLoaded) return <div>Loading...</div>
  return (
    <div>
      <GoogleMap zoom={7} center={center} mapContainerStyle={containerStyle}>
        {discount.map((data) => (
          <div key={data.title}>
            <MarkerF
              icon={{
                path: google.maps.SymbolPath.CIRCLE,
                strokeColor: `${
                  data.type === onSiteDiscountType[2]
                    ? '#EF4444'
                    : data.type === onSiteDiscountType[3]
                    ? '#EBB309'
                    : '#A855F7'
                }`,
                scale: 7,
              }}
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
                <div>{selectedMarker.title}</div>
              </InfoWindowF>
            )}
          </div>
        ))}
      </GoogleMap>
      {isInfoShown && selectedMarker !== undefined && (
        <div className='border bg-sky-100'>
          <DiscountItem
            title={selectedMarker.title}
            type={selectedMarker.type}
            url={selectedMarker.url}
            service={selectedMarker.service}
            method={selectedMarker.method}
            content={selectedMarker.content}
            address={selectedMarker.address}
          />
        </div>
      )}
    </div>
  )
}

export default Map
