import { gql, useMutation, useQuery } from "@apollo/client";
import Router from "next/router";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { ProjectGql } from "../../../gql/graphql";
import { handleGraphqlErrors } from "../../../utils/apolo.util";

const PROJECT_DETAIL_QUERY = gql`
  query getProject($id: String!) {
    getProject(id: $id) {
      id
      title
      price
      address
      location
      rate
      total_rate
      favorites
      hightlight
      reason_invest
      policy_link
      open_sale_at
      take_profit_at
      wait_transfer_at
      ended
      profit_period
      profile {
        project_id
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

export default function useInvestDetail() {
  const form = useForm();
  const { enqueueSnackbar } = useSnackbar();

  const detail = useQuery<{ getProject: ProjectGql }>(PROJECT_DETAIL_QUERY, {
    variables: {
      id: "clc5tky660000qake0yhoeco2",
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
    // fetchPolicy: "cache-and-network",
  });

  return {
    detail: detail.data?.getProject,
    form,
  };
}
