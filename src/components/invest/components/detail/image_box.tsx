import * as React from "react";
import Box from "@mui/material/Box";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import MapDialog from "./map_dialog";
import { ProjectGql, ProjectMediaGql } from "../../../../gql/graphql";
import { Skeleton } from "@mui/material";

interface IProps {
  project?: ProjectGql;
}
export default function InvestImageBox({ project }: IProps) {
  if (!project?.profile?.medias || project.profile.medias.length === 0) {
    return <Skeleton variant="rectangular" width="100%" height="432px" sx={{ mt: 4 }} />;
  }
  const medias = project.profile.medias;

  return (
    <Gallery>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 1,
          mt: 4,
          position: "relative",
        }}
      >
        {medias?.map((item, idx) => {
          return (
            <Item
              key={`media_${item.url}`}
              original={item.url}
              thumbnail={item.thumbnail ?? item.url}
              width={item.width}
              height={item.height}
              alt="Project media"
            >
              {({ ref, open }) => (
                <Box
                  component="img"
                  src={item.url}
                  sx={{
                    gridColumn: idx === 0 ? ["1", "1/span 2"] : "auto",
                    gridRow: idx === 0 ? ["1", "1/span 2"] : "auto",
                    width: "100%",
                    height: "100%",
                  }}
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                  onClick={open}
                />
              )}
            </Item>
          );
        })}
        {project.location?.length > 0 ? <MapDialog project={project} /> : null}
      </Box>
    </Gallery>
  );

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 1,
        mt: 4,
      }}
    >
      <Box
        component="img"
        src="/assets/imgs/invest/imgs/img_galaxy_demo1.png"
        sx={{
          gridColumn: ["1", "1/span 2"],
          gridRow: ["1", "1/span 2"],
          width: "100%",
          height: "100%",
        }}
      />
      <Box component="img" src="/assets/imgs/invest/imgs/img_galaxy_demo2.png" sx={{ width: "100%", height: "100%" }} />
      <Box component="img" src="/assets/imgs/invest/imgs/img_galaxy_demo3.png" sx={{ width: "100%", height: "100%" }} />
      <Box component="img" src="/assets/imgs/invest/imgs/img_galaxy_demo4.png" sx={{ width: "100%", height: "100%" }} />
      <Box component="img" src="/assets/imgs/invest/imgs/img_galaxy_demo5.png" sx={{ width: "100%", height: "100%" }} />
    </Box>
  );
}
