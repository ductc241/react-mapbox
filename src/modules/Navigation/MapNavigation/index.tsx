import { Layer, Map, MapLayerMouseEvent, Marker, Source } from "react-map-gl";
import { getGeoJsonData, getGeoJsonPoint, layerStyle } from "./map.config";
import { useContext, useState } from "react";
import { NavigationContext } from "../../../store/context";
import MarkerIcon from "../../../icons/MarkerIcon";
import TargetIcon from "../../../icons/TargetIcon";

const MapNavigation = () => {
  const { cordinatesList, setCordinatesList, recommendRoutes } =
    useContext(NavigationContext);

  const [isEnableClicking, setIsEnableClicking] = useState<boolean>(true);

  const handleClick = (e: MapLayerMouseEvent) => {
    if (!isEnableClicking) return;

    if (cordinatesList.length === 1) setIsEnableClicking(false);
    setCordinatesList(prev => [...prev, [e.lngLat.lng, e.lngLat.lat]]);
  };

  return (
    <Map
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
      initialViewState={{
        longitude: 105.86038,
        latitude: 21.0375,
        zoom: 17,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      style={{ width: "100%", height: "100%" }}
      onClick={e => handleClick(e)}
    >
      <Source
        id="my-data"
        type="geojson"
        data={getGeoJsonPoint(cordinatesList)}
      >
        <Layer {...layerStyle} />

        {cordinatesList.map((coordinate, index) => (
          <Marker
            longitude={coordinate[0]}
            latitude={coordinate[1]}
            key={index}
          />
        ))}
      </Source>

      {recommendRoutes.length > 0 && (
        <Source
          id="my-data"
          type="geojson"
          data={getGeoJsonData(recommendRoutes[0].geometry.coordinates)}
        >
          <Layer {...layerStyle} />

          {recommendRoutes[0].geometry.coordinates.map((coordinate, index) => (
            <Marker
              longitude={coordinate[0]}
              latitude={coordinate[1]}
              key={index}
            >
              <TargetIcon fill="red" />
            </Marker>
          ))}
        </Source>
      )}
    </Map>
  );
};

export default MapNavigation;
