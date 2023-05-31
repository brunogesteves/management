export interface RolesProps {
  name: string;
  id: number;
}

export interface DepartmentsProps {
  name: string;
  id: number;
}

export interface BranchsProps {
  id: number;
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  phone: string;
}

enum Status {
  active = 'active',
  inactive = 'inactive',
}

export interface EmployeeProps {
  name: string;
  id: number;
  email: string;
  address: string;
  phone: string;
  cpf: string;
  birth_date: Date;
  status: Status;
  roleID: number;
  departmentID: number;
  branchID: number;
  image: string;
}
