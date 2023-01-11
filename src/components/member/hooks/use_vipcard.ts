import { gql, useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { VipCard } from "../../../gql/graphql";
import { handleGraphqlErrors } from "../../../utils/apolo.util";
import UserStore from "../../../store/user.store";
import { useRouter } from "next/router";

const GET_VIP_CARD = gql`
  query getVipCard {
    getVipCard {
      id
      number
      name
      tier
      valid_from
    }
  }
`;

export const useVipCard = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [vipCard, setVipCard] = useState<any>();
  const { loading } = useQuery<{ getVipCard: VipCard }>(GET_VIP_CARD, {
    skip: !UserStore.isLoggedIn,
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

const GET_VIP_CARD_FROM_ID = gql`
  query getVipCardFromId($id: String!) {
    getVipCardFromId(id: $id) {
      id
      number
      name
      tier
      valid_from
    }
  }
`;

export const useGetVipCardFromId = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const { vipcard } = router.query;
  const { loading, data } = useQuery<{ getVipCardFromId: VipCard }>(GET_VIP_CARD_FROM_ID, {
    skip: !vipcard,
    variables: {
      id: vipcard,
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
  });

  return {
    loading,
    data: data?.getVipCardFromId,
  };
};
