import { Box, Modal } from "@mui/material";
import dynamic from "next/dynamic";
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps";
const GoogleMapReact = dynamic(
  //@ts-ignore
  () => import("google-map-react"),
  { ssr: false },
);

const BaseMap = () => {
  return (
    <div>
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}></GoogleMap>
    </div>
  );
};

const Map = withScriptjs(withGoogleMap(BaseMap));

export default function MapDialog() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <Modal open>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          background: "red",
          //   maxWidth: "1440px",
        }}
      >
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=HNwCJxgGX2dkbgr7N6STR8d2Uns="
          loadingElement={<div className="h-full" />}
          containerElement={<div className="relative w-full rounded h-600-px" />}
          mapElement={<div className="rounded h-full" />}

          // googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAYeeiPjDPhhuF7FmTEiIwzgdrcZ9kPnf0`}
          // // googleMapURL={`https://maps.googleapis.com/maps/api/js&callback=initMap`}
          // loadingElement={<div style={{ height: `100%` }} />}
          // containerElement={<div style={{ height: `90vh`, margin: `auto`, border: "2px solid black" }} />}
          // mapElement={<div style={{ height: `100%` }} />}
        />
      </Box>
    </Modal>
  );
}