import { Map, MapMarker } from "react-kakao-maps-sdk"

const MapComponent = ({lat, lng, title}) => {
  const location = {lat, lng}
  console.log(location)
  return (
    <Map center={location} level={5} style={{ width: "100%", height: "300px" }} >
      <MapMarker position={location} image={{
        src:"https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
        size:{width:'24',height:'30'},
      }} title={title} />
    </Map>
  )
}

export default MapComponent