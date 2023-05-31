import { gql } from '@apollo/client';

export const DELETE_CATEGORY = gql`
  mutation DeleteDepartment($data: DeleteDepartmentInput!) {
    deleteDepartment(data: $data)
  }
`;

export const ADD_DEPARTMENT = gql`
  mutation Mutation($data: addDepartmentInput!) {
    addDepartment(data: $data)
  }
`;
