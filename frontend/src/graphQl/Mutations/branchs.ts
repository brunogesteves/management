import { gql } from '@apollo/client';
export const DELETE_BRANCH = gql`
  mutation DeleteBranch($data: DeleteBranchInput!) {
    deleteBranch(data: $data)
  }
`;

export const ADD_UPDATE_BRANCH = gql`
  mutation addUpdateBranch($data: addUpdateBrancInput!) {
    addUpdateBranch(data: $data)
  }
`;
