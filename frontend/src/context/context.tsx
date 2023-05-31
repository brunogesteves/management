import React, { useState, useContext, useEffect } from 'react';

import { InfoContext } from './infoContext';
import type {
  BranchsProps,
  DepartmentsProps,
  EmployeeProps,
  RolesProps,
} from '../types';
import { useQuery } from '@apollo/client';
import {
  GET_ALL_BRANCHS,
  GET_ALL_DEPARTMENTS,
  GET_ALL_EMPLOYEES,
  GET_ALL_ROLES,
} from '../graphQl/Queries';

export const InfoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [name, setName] = useState<string>('');
  const [allEmployees, setAllEmployees] = useState<EmployeeProps[]>([]);
  const [allRoles, setAllRoles] = useState<RolesProps[]>([]);
  const [allDepartments, setAllDepartments] = useState<DepartmentsProps[]>([]);
  const [allBranchs, setAllBranchs] = useState<BranchsProps[]>([]);
  const [openModalEmployee, setOpenModalEmployee] = useState<boolean>(false);

  const [openModalBranch, setOpenModalBranch] = useState<boolean>(false);

  const [employeeId, setEmployeeId] = useState<number>(0);
  const [branchId, setBranchId] = useState<number>(0);

  const { data: dataEmployees } = useQuery(GET_ALL_EMPLOYEES);
  const { data: dataRoles } = useQuery(GET_ALL_ROLES);
  const { data: dataDepartments } = useQuery(GET_ALL_DEPARTMENTS);
  const { data: dataBranchs } = useQuery(GET_ALL_BRANCHS);

  useEffect(() => {
    const temporaryList: EmployeeProps[] = dataEmployees?.getEmployees.map(
      (data: EmployeeProps) => {
        return {
          ...data,
        };
      }
    );
    setAllEmployees(temporaryList);
  }, [dataEmployees]);

  useEffect(() => {
    const temporaryList: RolesProps[] = dataRoles?.getRoles.map(
      (data: RolesProps) => {
        return {
          ...data,
        };
      }
    );
    setAllRoles(temporaryList);
  }, [dataRoles]);

  useEffect(() => {
    const temporaryList: DepartmentsProps[] =
      dataDepartments?.getDepartments.map((data: DepartmentsProps) => {
        return {
          ...data,
        };
      });
    setAllDepartments(temporaryList);
  }, [dataDepartments]);

  useEffect(() => {
    const temporaryList: BranchsProps[] = dataBranchs?.getBranchs.map(
      (data: BranchsProps) => {
        return {
          ...data,
        };
      }
    );
    setAllBranchs(temporaryList);
  }, [dataBranchs]);

  return (
    <InfoContext.Provider
      value={{
        name,
        setName,
        allEmployees,
        setAllEmployees,
        allRoles,
        setAllRoles,
        allDepartments,
        setAllDepartments,
        allBranchs,
        setAllBranchs,
        openModalEmployee,
        setOpenModalEmployee,
        employeeId,
        setEmployeeId,
        openModalBranch,
        setOpenModalBranch,
        branchId,
        setBranchId,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};

export function useInfo() {
  const useInfo = useContext(InfoContext);
  return useInfo;
}
