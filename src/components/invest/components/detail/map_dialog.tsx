import { Close } from "@mui/icons-material";
import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton, Modal } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import { ProjectGql } from "../../../../gql/graphql";
import { useModal } from "../../../../hooks/use_modal";
import GoogleMap from "./map/google_map";
import MarkerType from "./map/marker_type";

interface IProps {
  project: ProjectGql;
}
export default function MapDialog({ project }: IProps) {
  const [highlightedItem, setHighlightedItem] = useState<MarkerType | null>(null);
  const latlong = project?.location?.split(",");
  let lat = 0;
  let long = 0;
  if (latlong && latlong.length > 1) {
    lat = Number(latlong[0]);
    long = Number(latlong[1].trim());
  }
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: lat, // 21.026573,
    lng: long, //105.828041,
  });
  const [zoom, setZoom] = useState<number>(15);
  const modal = useModal();

  const onIdle = (map: google.maps.Map) => {
    setZoom(map.getZoom()!);

    const nextCenter = map.getCenter();

    if (nextCenter) {
      setCenter(nextCenter.toJSON());
    }
  };

  const onMarkerClick = useCallback(
    (payload: MarkerType) => {
      if (highlightedItem === payload) {
        setHighlightedItem(null);
      } else {
        setHighlightedItem(payload);
      }
    },
    [highlightedItem],
  );

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<Box component="img" src="/assets/imgs/invest/icons/ic_map.svg" alt="" />}
        sx={{
          position: "absolute",
          bottom: "8px",
          right: "8px",
          px: "10px",
          height: "37px",
          display: ["none", "inline-flex"],
        }}
        onClick={modal.onOpen}
      >
        Hiển thị vị trí
      </Button>
      <Dialog fullWidth maxWidth="lg" open={modal.isOpen}>
        <DialogTitle sx={{ height: "60px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          Map
          <IconButton onClick={modal.onClose}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ p: "0px" }}>
          <Box
            sx={{
              width: "100%",
              height: "calc(100vh - 120px)",
            }}
          >
            <GoogleMap
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}
              center={center}
              zoom={zoom}
              markers={[{ project }]}
              onIdle={onIdle}
              onMarkerClick={onMarkerClick}
              highlightedMarkerId={highlightedItem?.project.id}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
