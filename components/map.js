import { useEffect, useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ({ data, style }) => {
  const [viewPort, setViewPort] = useState({
    latitude: null,
    longitude: null,
    zoom: 0,
  });

  if (
    data.latitude === null
      ? true
      : data.latitude !== viewPort.latitude
      ? true
      : false
  ) {
    setViewPort({
      latitude: data.latitude,
      longitude: data.longitude,
      zoom: 10,
    });
  }

  return (
    <ReactMapGl
      {...viewPort}
      mapStyle="mapbox://styles/davidtakidze/clddfaevf004b01mo8fqagfdt"
      style={style}
      onDrag={(nextViewport) => setViewPort(nextViewport.viewState)}
      onZoom={(nextViewport) => setViewPort(nextViewport.viewState)}
      mapboxAccessToken="pk.eyJ1IjoiZGF2aWR0YWtpZHplIiwiYSI6ImNsZDl1NzJnOTBjbm0zeWxpMWp5NHByangifQ.JoLIPVb3HX9ckfVClhlCNQ"
    >
      {data.latitude && data.longitude ? (
        <Marker latitude={data.latitude} longitude={data.longitude} />
      ) : (
        ""
      )}
    </ReactMapGl>
  );
};

export default Map;
