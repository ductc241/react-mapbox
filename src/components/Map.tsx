import Map, { Marker } from "react-map-gl";
import MarkerIcon from "../icons/MarkerIcon";

const MapBox = () => {
  return (
    <Map
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
      initialViewState={{
        longitude: -73.9866,
        latitude: 40.7306,
        zoom: 14,
      }}
      style={{ width: "100%" }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
    >
      <Marker longitude={-73.9866} latitude={40.7306} anchor="bottom">
        <MarkerIcon height={35} width={35} />
      </Marker>
    </Map>
  );
};

export default MapBox;
