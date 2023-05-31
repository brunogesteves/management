import { gql } from '@apollo/client';

export const GET_ALL_BRANCHS = gql`
  query Query {
    getBranchs {
      id
      name
      email
      address
      city
      state
      phone
    }
  }
`;

export const GET_ALL_DEPARTMENTS = gql`
  query Query {
    getDepartments {
      name
      id
    }
  }
`;

export const GET_ALL_ROLES = gql`
  query Query {
    getRoles {
      name
      id
    }
  }
`;

export const GET_ALL_EMPLOYEES = gql`
  query Query {
    getEmployees {
      name
      id
      email
      address
      phone
      cpf
      birth_date
      status
      branchID
      departmentID
      roleID
      image
    }
  }
`;

export const UNIQUE_EMPLOYEE = gql`
  query Query($data: UpdateDeleteEmployeeInput!) {
    getUniqueEmployee(data: $data) {
      name
      id
      email
      address
      phone
      cpf
      birth_date
      status
      branchID
      departmentID
      roleID
    }
  }
`;
