import { useEffect, useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ({ data, style, mapbox_key }) => {
  const [viewPort, setViewPort] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 0,
  });

  useEffect(() => {
    setViewPort({
      latitude: data.latitude,
      longitude: data.longitude,
      zoom: 10,
    });
  }, [data]);

  return (
    <ReactMapGl
      {...viewPort}
      mapStyle="mapbox://styles/davidtakidze/clddfaevf004b01mo8fqagfdt"
      style={style}
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
