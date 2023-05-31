import { gql } from '@apollo/client';

export const DELETE_ROLE = gql`
  mutation DeleteRole($data: DeleteRoleInput!) {
    deleteRole(data: $data)
  }
`;

export const ADD_ROLE = gql`
  mutation Mutation($data: AddRoleInput!) {
    AddRole(data: $data)
  }
`;
