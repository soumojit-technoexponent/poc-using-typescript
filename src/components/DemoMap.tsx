import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { memo, useCallback, useState } from 'react';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const DemoMap = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD1aNKVq1bbn8SPw9amjW1t2bTg35GQkhU"
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (
        isLoaded ?
            (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
            )
            :
            <>Loading</>
    )
}

export default memo(DemoMap);