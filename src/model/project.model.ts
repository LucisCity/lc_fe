import { ProjectGql, ProjectNftOwner, ProjectProfitBalance } from "../gql/graphql";

export type ProjectModel = ProjectGql & {
  isVoted?: boolean;
  profitBalance?: ProjectProfitBalance;
  nftBought?: ProjectNftOwner;
};
