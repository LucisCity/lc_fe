import { gql, useQuery } from "@apollo/client";
import { handleGraphqlErrors } from "../../utils/apolo.util";
import { useSnackbar } from "notistack";
import { InvestedProjectGql, ProjectGql } from "../../gql/graphql";
import { useState } from "react";

const GET_INVESTED_PROJECTS = gql`
  query investedProjects {
    investedProjects {
      id
      title
      price
      thumbnail
      address
      open_sale_at
      take_profit_at
      wait_transfer_at
      ended
      profile {
        follows
      }
      profit_balance {
        balance
      }
      nft_bought {
        total_nft
        currency_amount
      }
    }
  }
`;

export const useInvestedProject = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [investedProjects, setInvestedProjects] = useState<InvestedProjectGql[]>([]);
  const { loading } = useQuery<{ investedProjects: InvestedProjectGql[] }>(GET_INVESTED_PROJECTS, {
    onCompleted: (res) => {
      setInvestedProjects(res?.investedProjects);
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
  });

  return {
    loading,
    investedProjects,
  };
};

const GET_FOLLOWING_PROJECTS = gql`
  query followingProjects {
    followingProjects {
      id
      title
      price
      thumbnail
      address
      location
      policy_link
      open_sale_at
      take_profit_at
      wait_transfer_at
      ended
      profit_period
      profile {
        follows
      }
    }
  }
`;

export const useFollowingProject = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [followingProjects, setFollowingProjects] = useState<ProjectGql[]>([]);
  const { loading } = useQuery<{ followingProjects: ProjectGql[] }>(GET_FOLLOWING_PROJECTS, {
    onCompleted: (res) => {
      setFollowingProjects(res?.followingProjects);
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
  });

  return {
    loading,
    followingProjects,
  };
};

const GET_RECOMMENDED_PROJECTS = gql`
  query recommendedProjects {
    recommendedProjects {
      id
      title
      price
      thumbnail
      address
      location
      policy_link
      open_sale_at
      take_profit_at
      wait_transfer_at
      ended
      profit_period
      profile {
        follows
      }
    }
  }
`;

export const useRecommendedProject = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [recommendedProjects, setRecommendedProjects] = useState<ProjectGql[]>([]);
  const { loading } = useQuery<{ recommendedProjects: ProjectGql[] }>(GET_RECOMMENDED_PROJECTS, {
    onCompleted: (res) => {
      setRecommendedProjects(res?.recommendedProjects);
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
  });

  return {
    loading,
    recommendedProjects,
  };
};

const GET_HOT_PROJECTS = gql`
  query hotProjects {
    hotProjects {
      id
      title
      price
      thumbnail
      address
      location
      policy_link
      open_sale_at
      take_profit_at
      wait_transfer_at
      ended
      profit_period
      profile {
        follows
      }
    }
  }
`;

export const useHotProject = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [hotProjects, setHotProjects] = useState<ProjectGql[]>([]);
  const { loading } = useQuery<{ hotProjects: ProjectGql[] }>(GET_HOT_PROJECTS, {
    onCompleted: (res) => {
      setHotProjects(res?.hotProjects);
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
  });

  return {
    loading,
    hotProjects,
  };
};
