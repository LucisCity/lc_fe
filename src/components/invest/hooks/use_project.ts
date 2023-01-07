import { useLazyQuery, useMutation, useQuery, useSubscription } from "@apollo/client";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { FILTER_PROJECT_QUERY, GET_HOT_PROJECT } from "../../../config/api/invest.config";
import { ProjectGql, ProjectNftOwner, ProjectProfitBalance } from "../../../gql/graphql";
import projectStore from "../../../store/project.store";
import { handleGraphqlErrors } from "../../../utils/apolo.util";

export default function useProject() {
  const form = useForm();
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
  };
}
