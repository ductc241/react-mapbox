import { CircleLayer, LineLayer } from "react-map-gl";

const getGeoJsonData = (coordinates: number[][]) => {
  const geojson: GeoJSON.FeatureCollection<GeoJSON.Geometry> = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: coordinates,
        },
      },
    ],
  };

  return geojson;
}

const getGeoJsonPoint = (points: number[][]) => {
  const geojson: GeoJSON.FeatureCollection<GeoJSON.Geometry> = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "MultiPoint",
          coordinates: points
        }
      }
    ]
  };

  return geojson;
}

const layerStyle: LineLayer = {
  id: "line-layer",
  type: "line",
  paint: {
    "line-color": "#78aeed",
    "line-width": 5,
  },
};

const layerPointStyle: CircleLayer = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 10,
    'circle-color': '#007cbf'
  }
};



export { getGeoJsonData, getGeoJsonPoint, layerStyle, layerPointStyle }