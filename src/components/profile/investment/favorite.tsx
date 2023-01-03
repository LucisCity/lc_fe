import { Box } from "@mui/system";
import { Skeleton } from "@mui/material";
import React from "react";
import StackAnim from "../../anim/stack_anim";
import PaginatedList from "../components/paginated_list";
import { ProjectCard } from "./components/project_card";
import { useFollowingProject } from "../../../hooks/profile/use_investment";

export default function InvestmentFavorite() {
  const { followingProjects, loading } = useFollowingProject();
  return (
    <React.Fragment>
      {loading ? (
        <PaginatedList rowsPerPage={5}>
          {Array.from({ length: 5 }).map((i, idx) => (
            <Box key={idx} px={{ md: 4 }} pt={{ xs: 4 }}>
              <Skeleton
                key={`notification_loading_${idx}`}
                variant={"rounded"}
                sx={{
                  borderRadius: 4,
                  height: { sm: 200, xs: 380 },
                }}
              />
            </Box>
          ))}
        </PaginatedList>
      ) : (
        <PaginatedList rowsPerPage={5}>
          {followingProjects.map((i, idx) => (
            <Box key={idx} px={{ md: 4 }} pt={{ xs: 4 }}>
              <ProjectCard {...i} />
            </Box>
          ))}
        </PaginatedList>
      )}
    </React.Fragment>
  );
}
