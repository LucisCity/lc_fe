import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FILTER_PROJECT_QUERY, PROJECT_DETAIL_QUERY, PROJECT_FOLLOW_MUT } from "../../../config/api/invest.config";
import { ProjectGql } from "../../../gql/graphql";
import projectStore from "../../../store/project.store";
import userStore from "../../../store/user.store";
import { handleGraphqlErrors } from "../../../utils/apolo.util";

export default function useInvestDetail() {
  const form = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const detail = useQuery<{ getProject: ProjectGql }>(PROJECT_DETAIL_QUERY, {
    variables: {
      id: "clcavhniw0000qalfi1sn8738",
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
    onCompleted(data) {
      if (data.getProject) {
        projectStore.setProjectDetail(data.getProject);
      }
    },
    // fetchPolicy: "cache-and-network",
  });

  const [getRelateProjects, relateProjects] = useLazyQuery<{ getProjects: ProjectGql[] }>(FILTER_PROJECT_QUERY, {
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
  });

  const [toggleFollowProject, { loading }] = useMutation(PROJECT_FOLLOW_MUT, {
    onCompleted: () => {
      enqueueSnackbar("Request successfully!", {
        variant: "success",
      });
      detail.client.refetchQueries({
        include: ["getProject"],
      });
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
  });

  useEffect(() => {
    if (detail.data?.getProject && !relateProjects.data?.getProjects) {
      getRelateProjects({
        variables: {
          filter: {
            type: detail.data.getProject.type,
          },
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detail.data, relateProjects.data]);

  function onToggleFollow() {
    const projectId = detail.data?.getProject.id;
    if (!userStore.isLoggedIn) {
      router.push("/login");
      return;
    }
    if (!projectId || loading) {
      return;
    }
    toggleFollowProject({
      variables: {
        projectId,
      },
    });
  }

  return {
    detail: detail.data?.getProject,
    relateProjects: relateProjects.data?.getProjects,
    form,
    onToggleFollow,
  };
}
