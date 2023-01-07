import { Box, Divider, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import projectStore from "../../../store/project.store";
import { formatNumber } from "../../../utils/number.util";
import { Card } from "./card";

const VisitedProject = observer(() => {
  const visitedProjects = projectStore.visitedProject != null ? Object.values(projectStore.visitedProject) : [];
  if (visitedProjects.length === 0) {
    return null;
  }
  return (
    <>
      <Divider sx={{ my: 8 }} />
      <Typography variant="h3" mb={6}>
        Dự án bạn đã xem
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: ["1fr", "repeat(2, 1fr)", "repeat(4, 1fr)", "repeat(4, 1fr)"],
          gap: 6,
        }}
      >
        {visitedProjects.map((item, index) => {
          //   if (item.id === projectId) {
          //     return null;
          //   }
          return (
            <Box key={"invest" + index}>
              <Card
                key={"invest" + index}
                address={item.address}
                image={item.thumbnail}
                name={item.title}
                price={formatNumber(item.price)}
                isCollapseContent={false}
              />
            </Box>
          );
        })}
      </Box>
    </>
  );
});

export default VisitedProject;
