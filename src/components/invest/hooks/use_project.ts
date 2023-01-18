import { useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { FILTER_PROJECT_QUERY, GET_HOT_PROJECT } from "../../../config/api/invest.config";
import { ProjectGql } from "../../../gql/graphql";
import { handleGraphqlErrors } from "../../../utils/apolo.util";

export default function useProject() {
  const { enqueueSnackbar } = useSnackbar();

  const { data: highlightProjects, loading: loadingHighlightProject } = useQuery<{ hotProjects: ProjectGql[] }>(
    GET_HOT_PROJECT,
    {
      onError: (e) => {
        const errors = handleGraphqlErrors(e);
        errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
      },
    },
  );

  const {
    data: projectSearchData,
    loading: searchLoading,
    refetch: searchProject,
  } = useQuery<{ getProjects: ProjectGql[] }>(FILTER_PROJECT_QUERY, {
    skip: true,
  });

  const {
    data: projects,
    loading: loadingProjects,
    refetch,
  } = useQuery<{ getProjects: ProjectGql[] }>(FILTER_PROJECT_QUERY, {
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
  });

  return {
    highlightProjects: highlightProjects?.hotProjects ?? [],
    loadingHighlightProject,
    projects: projects?.getProjects ?? [],
    loadProjects: refetch,
    loadingProjects,
    projectSearchData: projectSearchData?.getProjects ?? [],
    searchProject,
    searchLoading,
  };
}
