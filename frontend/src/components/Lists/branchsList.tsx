import React, { Fragment, useEffect, useState } from 'react';
import type { BranchsProps } from '../../types';
import type { TableColumn } from 'react-data-table-component';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ALL_BRANCHS } from '../../graphQl/Queries';
import { Menu, Transition } from '@headlessui/react';
import { IoMdMore } from 'react-icons/io';
import { DELETE_BRANCH } from '../../graphQl/Mutations/branchs';
import { useInfo } from '../../context/context';
import { customStyles } from '../../Utils/customStyles';

export const useBranchsList: any = () => {
  const { refetch } = useQuery(GET_ALL_BRANCHS);
  const [deleteBranch] = useMutation(DELETE_BRANCH);
  const [pending, setPending] = useState<boolean>(true);
  const [searchText, setSearchText] = useState<string>('');

  const { allBranchs, setOpenModalBranch, setBranchId } = useInfo();

  useEffect(() => {
    if (allBranchs?.length > 0) {
      setPending(false);
    }
  }, [allBranchs]);

  const columns: TableColumn<BranchsProps>[] = [
    {
      name: 'Id',
      selector: (row) => row.id,
      width: '40px',
    },
    {
      name: 'Nome',
      selector: (row) => row.name,
      width: '130px',
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      width: '270px',
    },
    {
      name: 'Address',
      selector: (row) => row.address,
      width: '220px',
    },
    {
      name: 'City',
      selector: (row) => row.city,
      width: '120px',
    },
    {
      name: 'Estate',
      selector: (row) => row.state,
      width: '70px',
    },
    {
      name: 'Phone',
      selector: (row) => row.phone,
      width: '130px',
    },
    {
      name: 'Actions',
      cell: (row) => (
        <Menu as="div" className="relative inline-block text-left">
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
                      setBranchId(row.id);
                      setOpenModalBranch(true);
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
                      deleteBranch({
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
    },
  ];

  const filteredItems = allBranchs?.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return {
    branchListData: {
      allBranchs: filteredItems,
      columns,
      customStyles,
      pending,
    },
    branchsListMethods: {
      setSearchText,
    },
  };
};
