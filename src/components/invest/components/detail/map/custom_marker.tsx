import { useCallback, useState } from "react";
import OverlayView from "./overlay_view";
import { motion } from "framer-motion";
import MapDataType from "./marker_type";
import { Box, IconButton, LinearProgress, Menu, Popover, Typography } from "@mui/material";
import { formatNumber } from "../../../../../utils/number.util";
import { KMath } from "../../../../../utils/math.util";
import useMenu from "../../../../../hooks/use_menu";

interface CustomMarkerProps {
  data: MapDataType;
  // @ts-ignore
  map?: google.maps.Map;
  onClick: (payload: MapDataType) => void;
  highlight?: boolean;
}

export default function CustomMarker({ data, map, onClick, highlight }: CustomMarkerProps) {
  const [showDetail, setShowDetail] = useState(false);

  const handleClick = useCallback(() => {
    onClick(data);
  }, [onClick, data]);

  let lat = 0;
  let lng = 0;
  const latlong = data.project?.location?.split(",");
  if (latlong && latlong.length > 1) {
    lat = Number(latlong[0]);
    lng = Number(latlong[1].trim());
  }
  const media =
    data.project.profile.medias && data.project.profile.medias.length > 0
      ? data.project.profile.medias[0].url ?? ""
      : "";

  return (
    <>
      {map && (
        <OverlayView
          position={{
            lat,
            lng,
          }}
          map={map}
          zIndex={highlight ? 99 : 0}
        >
          <Box>
            <Box
              component="img"
              src="/assets/imgs/invest/icons/ic_marker.png"
              width="44px"
              onClick={() => {
                setShowDetail((pre) => !pre);
              }}
              sx={{ cursor: "pointer" }}
            />
            {showDetail ? (
              <Box>
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
                    <Box component="img" src={media} sx={{ width: "100px", height: "100%" }} />
                    <Box ml="12px" sx={{ flex: 1 }}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="body2">${formatNumber(data.project.price)}</Typography>
                        <Typography color="primary" sx={{ fontSize: "8px", ml: "8px" }}>
                          For Sale
                        </Typography>
                      </Box>
                      <Typography variant="caption" whiteSpace="pre-line" sx={{ fontSize: "10px", color: "#969696" }}>
                        {data.project.address}
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        color="primary"
                        value={KMath.div(data.project.total_nft_sold, data.project.total_nft)
                          .multipliedBy(100)
                          .toNumber()}
                        sx={{ borderRadius: "2px" }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mt: "5px",
                        }}
                      >
                        <Box component="img" src="/assets/imgs/invest/icons/ic_total_suply.svg" />
                        <Typography ml="8px" variant="caption" sx={{ color: "#737373", marginRight: "8px", flex: 1 }}>
                          Total supply
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: "14px", lineHeight: "16px" }}>
                          {formatNumber(data.project.total_nft)}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          // gap: "8px",
                          mt: "5px",
                        }}
                      >
                        <Box component="img" src="/assets/imgs/invest/icons/ic_dolar.svg" />
                        <Typography ml="8px" variant="caption" sx={{ color: "#737373", marginRight: "8px", flex: 1 }}>
                          Total raise
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: "14px", lineHeight: "16px" }}>
                          ${formatNumber(data.project.total_nft_sold * data.project.price)}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </Box>
            ) : null}
          </Box>
        </OverlayView>
      )}
    </>
  );
}
