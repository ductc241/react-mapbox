import Map, { Marker } from "react-map-gl";
import MarkerIcon from "../icons/MarkerIcon";

const MapProvider = () => {
  return (
    <Map
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 3.5,
      }}
      style={{ width: "100%", height: 400 }}
      mapStyle="mapbox://styles/mapbox/outdoors-v12"
    >
      <Marker longitude={-100} latitude={40} anchor="bottom">
        <MarkerIcon height={35} width={35} />
      </Marker>

      <Marker longitude={-100} latitude={41} anchor="bottom">
        <MarkerIcon height={35} width={35} />
      </Marker>
    </Map>
  );
};

export default MapProvider;
