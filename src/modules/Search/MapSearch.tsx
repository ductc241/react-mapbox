import Map, { Marker } from "react-map-gl";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../store/context";

interface ICenter {
  longitude: number;
  latitude: number;
  zoom: number;
}

const MapBox = () => {
  const { recommendAddress, selectedAddress } = useContext(SearchContext);
  const [viewState, setViewState] = useState<ICenter>();

  useEffect(() => {
    if (!selectedAddress) return;

    setViewState({
      longitude: selectedAddress.center[0],
      latitude: selectedAddress.center[1],
      zoom: 15,
    });
  }, [selectedAddress]);

  return (
    <Map
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
      initialViewState={{
        zoom: 1,
      }}
      {...viewState}
      style={{ width: "100%" }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      onMove={e => setViewState(e.viewState)}
    >
      {!selectedAddress &&
        recommendAddress.map(address => (
          <Marker
            longitude={address.center[0]}
            latitude={address.center[1]}
            anchor="bottom"
            key={address.id}
          />
        ))}

      {selectedAddress && (
        <Marker
          longitude={selectedAddress.center[0]}
          latitude={selectedAddress.center[1]}
          anchor="bottom"
        />
      )}
    </Map>
  );
};

export default MapBox;
