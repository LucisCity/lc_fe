import { ProjectGql, ProjectNftBought, ProjectProfitBalance } from "../gql/graphql";

export type ProjectModel = ProjectGql & {
  isVoted?: boolean;
  profitBalance?: ProjectProfitBalance;
  nftBought?: ProjectNftBought;
};
