import { gql } from '@apollo/client';

export const DELETE_EMPLOYEE = gql`
  mutation Mutation($data: DeleteEmployeeInput!) {
    deleteEmployee(data: $data)
  }
`;

export const ADD_UPDATE_EMPLOYEE = gql`
  mutation addUpdateEmployee($data: CreateUpdateEmployeeInput!) {
    addUpdateEmployee(data: $data)
  }
`;
