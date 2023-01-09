import { gql } from "@apollo/client";

export const FILTER_PROJECT_QUERY = gql`
  query getProjects($filter: ProjectFilter, $search: String) {
    getProjects(filter: $filter, search: $search) {
      id
      title
      price
      thumbnail
      address
      location
      policy_link
      open_sale_at
      take_profit_at
      start_time_vote_sell
      end_time_vote_sell
      ended
      profit_period
      total_nft
      nft_price
      total_nft_sold
      profile {
        follows
      }
    }
  }
`;

export const GET_HOT_PROJECT = gql`
  query getHotProjects {
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
      start_time_vote_sell
      end_time_vote_sell
      ended
      profit_period
      total_nft
      total_nft_sold
      nft_price
      profile {
        follows
      }
    }
  }
`;

export const PROJECT_DETAIL_QUERY = gql`
  query getProject($id: String!) {
    getProject(id: $id) {
      id
      title
      thumbnail
      price
      address
      location
      policy_link
      open_sale_at
      take_profit_at
      start_time_vote_sell
      end_time_vote_sell
      ended
      profit_period
      profit_period_index
      total_nft
      total_nft_sold
      nft_price
      profile {
        project_id
        highlight
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
      contract {
        address
        abi
      }
    }
  }
`;

export const PROJECT_CLAIM_PROFIT_MUT = gql`
  mutation claimProjectProfit($projectId: String!) {
    claimProjectProfit(projectId: $projectId)
  }
`;

export const PROJECT_FOLLOW_MUT = gql`
  mutation toggleFollowProject($projectId: String!) {
    toggleFollowProject(projectId: $projectId)
  }
`;

export const PROJECT_VOTE_MUT = gql`
  mutation voteProject($input: RateProjectInput!) {
    voteProject(input: $input)
  }
`;

export const VOTE_SELLPROJECT_MUT = gql`
  mutation voteProject($projectId: String!, $isSell: Boolean!) {
    voteSellProject(projectId: $projectId, isSell: $isSell)
  }
`;

export const PROFIT_BALANCE_SUBSCRIPTION = gql`
  subscription profitBalanceChange($projectId: String!) {
    profitBalanceChange(projectId: $projectId) {
      user_id
      project_id
      balance
      from
      to
    }
  }
`;

export const PROJECT_EXTRA_INFO_QUERY = gql`
  query projectExtraQuery($projectId: String!) {
    isVoted(projectId: $projectId)
    getProfitBalance(projectId: $projectId) {
      user_id
      project_id
      balance
      from
      to
    }
    getNftBought(projectId: $projectId) {
      project_id
      user_id
      total_nft
      currency_amount
      is_sell_voted
    }
  }
`;

export const PROJECT_INVESTOR_QUERY = gql`
  query getInvestor($projectId: String!) {
    getInvestor(projectId: $projectId) {
      project_id
      total_nft
      currency_amount
      user {
        id
        profile {
          display_name
          family_name
          given_name
        }
        vipCard {
          id
          name
        }
      }
    }
  }
`;
