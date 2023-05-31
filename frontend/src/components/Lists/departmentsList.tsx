import React, { useEffect, useState } from 'react';
import type { DepartmentsProps } from '../../types';
import type { TableColumn } from 'react-data-table-component';
import { AiFillDelete } from 'react-icons/ai';
import { useMutation, useQuery } from '@apollo/client';
import {
  ADD_DEPARTMENT,
  DELETE_CATEGORY,
} from '../../graphQl/Mutations/departments';
import { GET_ALL_DEPARTMENTS } from '../../graphQl/Queries';
import { useInfo } from '../../context/context';
import { customStyles } from '../../Utils/customStyles';

export const useDepartmentsList: any = () => {
  const { allDepartments } = useInfo();
  const [pending, setPending] = useState<boolean>(true);
  const [newDepartment, setNewDepartment] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');

  const { refetch } = useQuery(GET_ALL_DEPARTMENTS);
  const [deleteCategory] = useMutation(DELETE_CATEGORY);
  const [addDepartment] = useMutation(ADD_DEPARTMENT);

  useEffect(() => {
    if (allDepartments?.length > 0) {
      setPending(false);
    }
  }, [allDepartments]);

  const columns: TableColumn<DepartmentsProps>[] = [
    {
      name: 'Id',
      selector: (row) => row.id,
      width: '40px',
    },
    {
      name: 'Name',
      selector: (row) => row.name,
      width: '200px',
    },
    {
      name: 'Actions',
      cell: (row) => (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() =>
            deleteCategory({
              variables: { data: { id: row.id } },
              onCompleted: refetch,
            })
          }
        >
          <AiFillDelete color="#b5f1dd" />
        </button>
      ),
    },
  ];

  async function addDeppartmentList() {
    await addDepartment({
      variables: { data: { name: newDepartment } },
      onCompleted: refetch,
    });
  }

  const filteredItems = allDepartments?.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return {
    departmentListData: {
      allDepartments: filteredItems,
      columns,
      customStyles,
      pending,
    },
    departmentListMethods: {
      addDeppartmentList,
      setNewDepartment,
      setSearchText,
    },
  };
};
