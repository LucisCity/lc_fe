import { gql } from "@apollo/client";

export const FILTER_PROJECT_QUERY = gql`
  query getProjects($filter: ProjectFilter) {
    getProjects(filter: $filter) {
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
      nft_price
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
