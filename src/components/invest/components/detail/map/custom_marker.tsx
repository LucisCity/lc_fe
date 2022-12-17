import { useCallback } from "react";
import OverlayView from "./overlay_view";
import { motion } from "framer-motion";
import MapDataType from "./marker_type";
import { Box, LinearProgress, Typography } from "@mui/material";

interface CustomMarkerProps {
  data: MapDataType;
  // @ts-ignore
  map?: google.maps.Map;
  onClick: (payload: MapDataType) => void;
  highlight?: boolean;
}

export default function CustomMarker({ data, map, onClick, highlight }: CustomMarkerProps) {
  const handleClick = useCallback(() => {
    onClick(data);
  }, [onClick, data]);

  return (
    <>
      {map && (
        <OverlayView
          position={{
            lat: data.lat,
            lng: data.long,
          }}
          map={map}
          zIndex={highlight ? 99 : 0}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: Math.random() * 0.3 } }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
          >
            <Box
              // highlight
              onClick={handleClick}
              sx={{
                width: "357px",
                maxWidth: "90%",
                height: "120px",
                background: "white",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                p: "12px",
              }}
            >
              <Box
                component="img"
                src="/assets/imgs/invest/imgs/img_marker_demo.png"
                sx={{ width: "100px", height: "100%" }}
              />
              <Box ml="12px">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="body2">$948.55</Typography>
                  <Typography color="primary" sx={{ fontSize: "8px", ml: "8px" }}>
                    For Sale
                  </Typography>
                </Box>
                <Typography variant="caption" whiteSpace="pre-line" sx={{ fontSize: "10px", color: "#969696" }}>
                  1901 Thornridge Cir. Shiloh, Hawaii 81063
                </Typography>
                <LinearProgress variant="determinate" color="primary" value={50} sx={{ borderRadius: "2px" }} />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mt: "5px",
                  }}
                >
                  <Box component="img" src="/assets/imgs/invest/icons/ic_total_suply.svg" />
                  <Typography ml="8px" variant="caption" sx={{ color: "#737373", flex: 1 }}>
                    Total supply
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "14px", lineHeight: "16px" }}>
                    2M Tokens
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mt: "5px",
                  }}
                >
                  <Box component="img" src="/assets/imgs/invest/icons/ic_dolar.svg" />
                  <Typography ml="8px" variant="caption" sx={{ color: "#737373", flex: 1 }}>
                    Total raise
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "14px", lineHeight: "16px" }}>
                    $95,492.13
                  </Typography>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </OverlayView>
      )}
    </>
  );
}
