import { useLazyQuery, useMutation, useQuery, useSubscription } from "@apollo/client";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FILTER_PROJECT_QUERY,
  PROJECT_EXTRA_INFO_QUERY,
  PROJECT_CLAIM_PROFIT_MUT,
  PROJECT_DETAIL_QUERY,
  PROJECT_FOLLOW_MUT,
  PROFIT_BALANCE_SUBSCRIPTION,
  PROJECT_INVESTOR_QUERY,
} from "../../../config/api/invest.config";
import { ErrorCode, ProjectGql, ProjectNftOwner, ProjectNftOwnerGql, ProjectProfitBalance } from "../../../gql/graphql";
import projectStore from "../../../store/project.store";
import userStore from "../../../store/user.store";
import { handleGraphqlErrors } from "../../../utils/apolo.util";
import { KMath } from "../../../utils/math.util";

export default function useInvestDetail() {
  const form = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const [disableClaim, setDisableClaim] = useState(false);
  const [isFollowingProject, setIsFollowingProject] = useState(false);
  const router = useRouter();
  const _id = router.query["id"] as string;
  const _temps = (_id ?? "").split(".");
  const projectId = _temps.length > 1 ? _temps[1] : null;
  const [profitRate, setProfitRate] = useState(0);

  const [fetchProject, detail] = useLazyQuery<{ getProject: ProjectGql }>(PROJECT_DETAIL_QUERY, {
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
    onCompleted(data) {
      if (data.getProject) {
        projectStore.setProjectDetail(data.getProject);
        if (userStore.isLoggedIn) {
          getExtraInfo({
            variables: {
              projectId,
            },
          });
        }
        projectStore.cacheVisitedProject(data.getProject);
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
    isFollowingProject: boolean;
  }>(PROJECT_EXTRA_INFO_QUERY, {
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
    onCompleted(data) {
      setDisableClaim(false);
      setIsFollowingProject(data.isFollowingProject);
      projectStore.setProjectDetail({
        ...(projectStore.projectDetail as any),
        isVoted: data.isVoted ?? false,
        profitBalance: data.getProfitBalance,
        nftBought: data.getNftBought,
      });
      if (!projectStore.projectDetail) {
        return;
      }
      projectStore.computeProfitRate(
        projectStore.projectDetail.nft_price,
        data.getNftBought.total_nft,
        data.getNftBought.currency_amount,
        data.getProfitBalance.balance,
        data.getProfitBalance.balance_claimed,
      );
    },
  });

  const [getInvestor, investorData] = useLazyQuery<{
    getInvestor: [ProjectNftOwnerGql];
  }>(PROJECT_INVESTOR_QUERY, {
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
    // onCompleted(data) {
    //   setDisableClaim(false);
    //   projectStore.setInvestor(data.getInvestor)
    // },
    fetchPolicy: "cache-first",
  });

  const [toggleFollowProject, { loading }] = useMutation(PROJECT_FOLLOW_MUT, {
    onCompleted: (data) => {
      setIsFollowingProject(data?.toggleFollowProject);
      // enqueueSnackbar("Request successfully!", {
      //   variant: "success",
      // });
      fetchProject({
        variables: {
          id: projectId,
        },
      });
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => {
        switch (err.code) {
          default:
            enqueueSnackbar("Lỗi server, vui lòng liên hệ với chúng tôi để được hỗ trợ", { variant: "error" });
        }
      });
    },
  });

  const [claimProfit, claimProfitData] = useMutation(PROJECT_CLAIM_PROFIT_MUT, {
    onCompleted: () => {
      enqueueSnackbar("Nhận lãi thành công!", {
        variant: "success",
      });
      detail.client.refetchQueries({
        include: ["projectExtraQuery"],
      });
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => {
        switch (err.code) {
          case ErrorCode.BalanceNotEnough:
            enqueueSnackbar("Không đủ profit để thực hiện thao tác này", { variant: "error" });
          case ErrorCode.WalletNotFound:
            enqueueSnackbar("Không tìm thấy ví", { variant: "error" });
          default:
            enqueueSnackbar("Lỗi server, vui lòng liên hệ với chúng tôi để được hỗ trợ", { variant: "error" });
        }
      });
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
    if (!projectId || projectId === detail.data?.getProject.id) {
      return;
    }
    fetchProject({
      variables: {
        id: projectId,
      },
    }).finally(() => {
      getInvestor({
        variables: {
          projectId,
        },
      });
    });
  }, [projectId]);

  useEffect(() => {
    projectStore.loadVisitedProject();
  }, []);

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
      router.push(`/login?redirect_url=${router.asPath}`);
      return;
    }
    if (!projectId || claimProfitData.loading) {
      return;
    }
    setDisableClaim(true);
    claimProfit({
      variables: {
        projectId,
      },
    });
  }

  return {
    projectId,
    detail: detail.data?.getProject,
    investors: investorData.data?.getInvestor,
    relateProjects: relateProjects.data?.getProjects,
    following: loading,
    profitBalance,
    claimProfitData,
    disableClaim,
    form,
    isFollowingProject,
    onToggleFollow,
    onClaimProfit,
  };
}
