import { gql, useMutation, useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { ProjectGql } from "../../../gql/graphql";
import projectStore from "../../../store/project.store";
import { handleGraphqlErrors } from "../../../utils/apolo.util";

const PROJECT_DETAIL_QUERY = gql`
  query getProject($id: String!) {
    getProject(id: $id) {
      id
      title
      price
      address
      location
      policy_link
      open_sale_at
      take_profit_at
      wait_transfer_at
      ended
      profit_period
      profile {
        project_id
        hightlight
        reason_invest
        vote
        total_vote
        follows
        medias {
          url
          width
          height
        }
        offers {
          icon
          title
        }
        events {
          start_at
          title
          description
        }
      }
    }
  }
`;

const PROJECT_FOLLOW_MUT = gql`
  mutation toggleFollowProject($projectId: String!) {
    toggleFollowProject(projectId: $projectId)
  }
`;

export default function useInvestDetail() {
  const form = useForm();
  const { enqueueSnackbar } = useSnackbar();

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

  function onToggleFollow() {
    const projectId = detail.data?.getProject.id;
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
    form,
    onToggleFollow,
  };
}
