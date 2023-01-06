import { useLazyQuery, useMutation, useQuery, useSubscription } from "@apollo/client";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import {
  FILTER_PROJECT_QUERY,
  PROJECT_EXTRA_INFO_QUERY,
  PROJECT_CLAIM_PROFIT_MUT,
  PROJECT_DETAIL_QUERY,
  PROJECT_FOLLOW_MUT,
  PROFIT_BALANCE_SUBSCRIPTION,
} from "../../../config/api/invest.config";
import { ProjectGql, ProjectNftOwner, ProjectProfitBalance } from "../../../gql/graphql";
import projectStore from "../../../store/project.store";
import userStore from "../../../store/user.store";
import { handleGraphqlErrors } from "../../../utils/apolo.util";

export default function useInvestDetail() {
  const form = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const projectId = "clcavhniw0000qalfi1sn8738";

  const detail = useQuery<{ getProject: ProjectGql }>(PROJECT_DETAIL_QUERY, {
    variables: {
      id: projectId,
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

  const [getExtraInfo, extraInfo] = useLazyQuery<{
    isVoted: boolean;
    getProfitBalance: ProjectProfitBalance;
    getNftBought: ProjectNftOwner;
  }>(PROJECT_EXTRA_INFO_QUERY, {
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
    onCompleted(data) {
      if (data.isVoted) {
        projectStore.setProjectDetail({
          ...(projectStore.projectDetail as any),
          isVoted: data.isVoted ?? false,
          profitBalance: data.getProfitBalance,
          nftBought: data.getNftBought,
        });
      }
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

  const [claimProfit, claimProfitData] = useMutation(PROJECT_CLAIM_PROFIT_MUT, {
    onCompleted: () => {
      enqueueSnackbar("Request successfully!", {
        variant: "success",
      });
      detail.client.refetchQueries({
        include: ["getProfitBalance"],
      });
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
  });

  const profitBalanceSubscription = useSubscription<{ profitBalanceChange: ProjectProfitBalance }>(
    PROFIT_BALANCE_SUBSCRIPTION,
    {
      variables: {
        projectId: projectId,
      },
    },
  );

  const profitBalance = useMemo(() => {
    return profitBalanceSubscription.data?.profitBalanceChange ?? extraInfo.data?.getProfitBalance;
  }, [extraInfo.data?.getProfitBalance, profitBalanceSubscription.data]);

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

  useEffect(() => {
    if (detail.data?.getProject && userStore.isLoggedIn) {
      const projectId = detail.data?.getProject.id;
      getExtraInfo({
        variables: {
          projectId,
        },
      });
    }
  }, [detail.data]);

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

  function onClaimProfit() {
    const projectId = detail.data?.getProject.id;
    if (!userStore.isLoggedIn) {
      router.push("/login");
      return;
    }
    if (!projectId || claimProfitData.loading) {
      return;
    }
    claimProfit({
      variables: {
        projectId,
      },
    });
  }

  return {
    detail: detail.data?.getProject,
    relateProjects: relateProjects.data?.getProjects,
    following: loading,
    profitBalance,
    claimProfitData,
    form,
    onToggleFollow,
    onClaimProfit,
  };
}
