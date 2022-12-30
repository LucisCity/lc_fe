import { ProjectGql } from "../gql/graphql";

export type ProjectModel = ProjectGql & { isVoted?: boolean };
