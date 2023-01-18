import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { ErrorCode, User, VipCard } from "../../../gql/graphql";
import { handleGraphqlErrors } from "../../../utils/apolo.util";
import UserStore from "../../../store/user.store";
import { useRouter } from "next/router";
import { GET_BALANCE } from "../../profile/account/hooks/use_info";

const GET_VIP_MEMBER = gql`
  query getVipUsers {
    getVipUsers {
      id
      email
      ref_code
      profile {
        user_id
        avatar
        display_name
      }
    }
  }
`;

const CLAIM_PROFIT_FOR_VIP_MEMBER = gql`
  mutation claimProfitForVipUser {
    claimProfitForVipUser
  }
`;

const GET_PROFIT_FOR_VIP_MEMBER = gql`
  query getProfitForVipMember {
    getProfitForVipMember
  }
`;

export const useVipMember = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [getBalance] = useLazyQuery(GET_BALANCE, {
    onCompleted: (res) => {
      UserStore.updateWallet(res?.getBalance);
    },
  });
  const { loading, data } = useQuery<{ getVipUsers: User[] }>(GET_VIP_MEMBER, {
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) =>
        enqueueSnackbar("Lỗi server, vui lòng liên hệ với chúng tôi để được hỗ trợ", { variant: "error" }),
      );
    },
  });

  const {
    loading: loadingProfit,
    data: profit,
    refetch,
  } = useQuery<{ getProfitForVipMember: string }>(GET_PROFIT_FOR_VIP_MEMBER, {
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => {
        switch (err.code) {
          case ErrorCode.ProfitIsZero:
            break;
          default:
            enqueueSnackbar("Lỗi server, vui lòng liên hệ với chúng tôi để được hỗ trợ", { variant: "error" });
            break;
        }
      });
    },
  });

  const [claimProfitForVipUser, { loading: loadingClaim }] = useMutation<{ claimProfitForVipUser: boolean }>(
    CLAIM_PROFIT_FOR_VIP_MEMBER,
    {
      onCompleted: async (res) => {
        if (res.claimProfitForVipUser) {
          await refetch();
          await getBalance();
        }
      },
      onError: (e) => {
        const errors = handleGraphqlErrors(e);
        errors.forEach((err) => {
          switch (err.code) {
            case ErrorCode.ProfitIsZero:
              enqueueSnackbar("Bạn chưa có lãi để rút!", { variant: "error" });

              break;
            default:
              enqueueSnackbar("Lỗi server, vui lòng liên hệ với chúng tôi để được hỗ trợ", { variant: "error" });
              break;
          }
        });
      },
    },
  );

  return {
    loading,
    data: data?.getVipUsers,
    claimProfitForVipUser,
    profit: profit?.getProfitForVipMember,
    loadingProfit,
    loadingClaim,
  };
};
