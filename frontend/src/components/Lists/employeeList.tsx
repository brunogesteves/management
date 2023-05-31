import React, { Fragment, useEffect, useState } from 'react';
import type { EmployeeProps } from '../../types';
import type { TableColumn } from 'react-data-table-component';

import { Menu, Transition } from '@headlessui/react';
import { IoMdMore } from 'react-icons/io';
import { useInfo } from '../../context/context';
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_EMPLOYEE } from '../../graphQl/Mutations/employee';
import { GET_ALL_EMPLOYEES } from '../../graphQl/Queries';
import { customStyles } from '../../Utils/customStyles';

export const useEmployeesList: any = () => {
  const {
    allEmployees,
    allRoles,
    allDepartments,
    allBranchs,
    setOpenModalEmployee,
    setEmployeeId,
  } = useInfo();
  const { refetch } = useQuery(GET_ALL_EMPLOYEES);
  const [pending, setPending] = useState<boolean>(true);
  const [searchText, setSearchText] = useState<string>('');

  const [deleteEmployee] = useMutation(DELETE_EMPLOYEE);

  useEffect(() => {
    if (
      allRoles?.length > 0 &&
      allDepartments?.length > 0 &&
      allBranchs?.length > 0
    ) {
      setPending(false);
    }
  }, [allRoles, allDepartments, allBranchs]);

  const columns: TableColumn<EmployeeProps>[] = [
    {
      name: 'Id',
      selector: (row) => row.id,
      width: '60px',
      sortable: true,
    },
    {
      name: '',
      cell: (row) => (
        <img src={row.image || '/avatar.jpg'} alt="avatar" width={30} />
      ),
      width: '60px',
    },
    {
      name: 'Name',
      selector: (row) => row.name,
      width: '180px',
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      width: '220px',
      sortable: true,
    },
    {
      name: 'Address',
      selector: (row) => row.address,
      width: '200px',
      sortable: true,
    },
    {
      name: 'Phone',
      selector: (row) => row.phone,
      width: 'auto',
      sortable: true,
    },
    {
      name: 'BirthDate',
      selector: (row) =>
        new Date(Number(row.birth_date)).toLocaleString('pt-BR', {
          timeZone: 'UTC',
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }),
      sortable: true,
      width: 'auto',
    },
    {
      name: 'Role',
      selector: (row) => allRoles[row.roleID]?.name,
      width: '190px',
      sortable: true,
    },
    {
      name: 'Departament',
      selector: (row) => allDepartments[row.departmentID]?.name,
      width: '200px',
      sortable: true,
    },
    {
      name: 'Branch',
      selector: (row) => allBranchs[row.branchID]?.name,
      width: '150px',
      sortable: true,
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      width: '100px',
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <Menu as="div" className="relative inline-block text-left  ">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              <IoMdMore />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
              <div className="py-1">
                <Menu.Item>
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-[#b5f1dd]"
                    onClick={() => {
                      setEmployeeId(row.id);
                      setOpenModalEmployee(true);
                    }}
                  >
                    Edit
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-[#b5f1dd]"
                    onClick={() =>
                      deleteEmployee({
                        variables: { data: { id: row.id } },
                        onCompleted: refetch,
                      })
                    }
                  >
                    delete
                  </a>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      ),
      width: '100px',
    },
  ];

  const filteredItems = allEmployees?.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return {
    employeelistData: {
      allEmployees: filteredItems,
      columns,
      customStyles,
      pending,
    },
    employeelistMethods: {
      setSearchText,
    },
  };
};
