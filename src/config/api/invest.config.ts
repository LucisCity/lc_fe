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
      wait_transfer_at
      ended
      profit_period
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

export const PROJECT_CHECK_VOTE_QUERY = gql`
  query isVoted($projectId: String!) {
    isVoted(projectId: $projectId)
  }
`;
