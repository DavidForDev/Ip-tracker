import { useEffect, useState } from "react";
import ReactMapGl, { Marker, ViewStateChangeEvent } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ({ data, style, mapbox_key }) => {
  const [viewPort, setViewPort] = useState({
    latitude: data.latitude,
    longitude: data.longitude,
    zoom: 10,
  });

  return (
    <ReactMapGl
      {...viewPort}
      mapStyle="mapbox://styles/davidtakidze/clddfaevf004b01mo8fqagfdt"
      style={style}
      initialViewState={viewPort}
      onDrag={(nextViewport) => setViewPort(nextViewport.viewState)}
      onZoom={(nextViewport) => setViewPort(nextViewport.viewState)}
      mapboxAccessToken={mapbox_key}
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
