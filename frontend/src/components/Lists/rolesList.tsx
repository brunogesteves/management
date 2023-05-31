import React, { useEffect, useState } from 'react';
import type { RolesProps } from '../../types';
import type { TableColumn } from 'react-data-table-component';

import { useMutation, useQuery } from '@apollo/client';
import { GET_ALL_ROLES } from '../../graphQl/Queries';
import { AiFillDelete } from 'react-icons/ai';
import { DELETE_ROLE, ADD_ROLE } from '../../graphQl/Mutations/roles';
import { useInfo } from '../../context/context';
import { customStyles } from '../../Utils/customStyles';

export const useRolesList: any = () => {
  const { allRoles } = useInfo();
  const [pending, setPending] = useState<boolean>(true);
  const [newRole, setNewRole] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');

  const { refetch } = useQuery(GET_ALL_ROLES);
  const [deleteRole] = useMutation(DELETE_ROLE);
  const [addRole] = useMutation(ADD_ROLE);

  useEffect(() => {
    if (allRoles?.length > 0) {
      setPending(false);
    }
  }, [allRoles]);

  const columns: TableColumn<RolesProps>[] = [
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
            deleteRole({
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

  async function addRoleList() {
    await addRole({
      variables: { data: { name: newRole } },
      onCompleted: refetch,
    });
  }

  const filteredItems = allRoles?.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return {
    roleListData: {
      allRoles: filteredItems,
      columns,
      customStyles,
      pending,
    },
    roleListMethods: {
      addRoleList,
      setNewRole,
      setSearchText,
    },
  };
};
