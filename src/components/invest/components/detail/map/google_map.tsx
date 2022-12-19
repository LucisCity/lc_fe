import { Status, Wrapper } from "@googlemaps/react-wrapper";
import React, { useMemo } from "react";
import Map from "./map";
import Marker from "./custom_marker";
import MarkerType from "./marker_type";

const render = (status: Status) => {
  console.log("status: ", status);
  if (status === Status.FAILURE) {
    return <p>failed</p>;
  }
  return <p>loading...</p>;
};

interface GoogleMapProps {
  onIdle?: (map: google.maps.Map) => void;
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onMarkerClick: (payload: MarkerType) => void;
  markers?: MarkerType[];
  center: google.maps.LatLngLiteral;
  zoom: number;
  apiKey: string;
  highlightedMarkerId?: string;
}

const GoogleMap = React.memo(function GMap({
  apiKey,
  onClick,
  onIdle,
  zoom,
  center,
  markers,
  onMarkerClick,
  highlightedMarkerId,
}: GoogleMapProps) {
  const filtered = useMemo(() => {
    return markers?.filter((m) => m.lat && m.long);
  }, [markers]);

  return (
    <Wrapper apiKey={apiKey} render={render}>
      <Map
        center={center}
        zoom={zoom}
        minZoom={2}
        maxZoom={18}
        onIdle={onIdle}
        onClick={onClick}
        fullscreenControl={false}
        streetViewControl={false}
        mapTypeControl={false}
        zoomControl={false}
        clickableIcons={false}
      >
        {filtered?.map((item) => (
          <Marker
            key={item.id || item.title}
            data={item}
            onClick={onMarkerClick}
            highlight={item.id === highlightedMarkerId}
          />
        ))}
      </Map>
    </Wrapper>
  );
});

export default GoogleMap;
