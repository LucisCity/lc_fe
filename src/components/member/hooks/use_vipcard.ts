import { gql, useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { VipCard } from "../../../gql/graphql";
import { handleGraphqlErrors } from "../../../utils/apolo.util";

const GET_VIP_CARD = gql`
  query getVipCard {
    getVipCard {
      id
      number
      name
      tier
      expired_at
    }
  }
`;

export const useVipCard = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [vipCard, setVipCard] = useState<any>({});
  const { loading } = useQuery<{ getVipCard: VipCard }>(GET_VIP_CARD, {
    onCompleted: (res) => {
      setVipCard(res?.getVipCard);
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
  });

  return {
    loading,
    vipCard,
  };
};

const HAS_VIP_CARD = gql`
  query hasVipCard {
    hasVipCard
  }
`;

export const useHasVipCard = () => {
  const { loading, data } = useQuery<{ hasVipCard: boolean }>(HAS_VIP_CARD);

  return {
    loading,
    data: data?.hasVipCard,
  };
};
