import { createContext } from 'react';
import type {
  BranchsProps,
  DepartmentsProps,
  EmployeeProps,
  RolesProps,
} from '../types';

interface ContextType {
  name: string;
  setName: (newState: string) => void;
  allEmployees: EmployeeProps[];
  setAllEmployees: (newState: EmployeeProps[]) => void;
  allRoles: RolesProps[];
  setAllRoles: (newState: RolesProps[]) => void;
  allDepartments: DepartmentsProps[];
  setAllDepartments: (newState: DepartmentsProps[]) => void;
  allBranchs: BranchsProps[];
  setAllBranchs: (newState: BranchsProps[]) => void;
  openModalEmployee: boolean;
  setOpenModalEmployee: (newState: boolean) => void;
  employeeId: number;
  setEmployeeId: (newState: number) => void;
  openModalBranch: boolean;
  setOpenModalBranch: (newState: boolean) => void;
  branchId: number;
  setBranchId: (newState: number) => void;
}

export const InfoContext = createContext<ContextType>({
  name: '',
  setName: () => {},
  allEmployees: [],
  setAllEmployees: () => {},
  allRoles: [],
  setAllRoles: () => {},
  allDepartments: [],
  setAllDepartments: () => {},
  allBranchs: [],
  setAllBranchs: () => {},
  openModalEmployee: false,
  setOpenModalEmployee: () => {},
  employeeId: 0,
  setEmployeeId: () => {},
  openModalBranch: false,
  setOpenModalBranch: () => {},
  branchId: 0,
  setBranchId: () => {},
});
