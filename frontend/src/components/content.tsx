import React from 'react';
import DataTable from 'react-data-table-component';
import { useBranchsList } from './Lists/branchsList';
import { useDepartmentsList } from './Lists/departmentsList';
import { useEmployeesList } from './Lists/employeeList';
import { useRolesList } from './Lists/rolesList';
import { Tab, initTE } from 'tw-elements';
import { AddEmployeeModal } from './Modals/AddEmployee/addUpdatemployeeModal.view';
import { AddBranchModal } from './Modals/AddBranch/addUpdateBranchModal.view';
import ClipLoader from 'react-spinners/ClipLoader';
import { useInfo } from '../context/context';

export const Content: React.FC = () => {
  initTE({ Tab });
  const { branchListData, branchsListMethods } = useBranchsList();
  const { departmentListData, departmentListMethods } = useDepartmentsList();
  const { roleListData, roleListMethods } = useRolesList();
  const { employeelistData, employeelistMethods } = useEmployeesList();

  const {
    openModalEmployee,
    setOpenModalEmployee,
    openModalBranch,
    setOpenModalBranch,
  } = useInfo();

  return (
    <>
      <ul
        className="mb-2 px-4 flex list-none flex-col flex-wrap border-b-0  md:flex-row w-full bg-[#b5f1dd] elevation-15 rounded-lg "
        role="tablist"
        data-te-nav-ref
      >
        <li role="presentation" className="lg:w-1/4 sm:w-full ">
          <a
            href="#tabs-employee"
            className="my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 text-xs font-medium uppercase leading-tight text-[#4b5563] hover:isolate hover:border-transparent hover:bg-blue-500 hover:text-white focus:isolate focus:border-transparent data-[te-nav-active]:border-[#2563eb] data-[te-nav-active]:!text-[#000] "
            data-te-toggle="pill"
            data-te-target="#tabs-employee"
            data-te-nav-active
            role="tab"
            aria-controls="tabs-employee"
            aria-selected="true"
          >
            Employees
          </a>
        </li>
        <li role="presentation" className="lg:w-1/4 sm:w-full ">
          <a
            href="#tabs-roles"
            className="my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 text-xs font-medium uppercase leading-tight text-[#4b5563] hover:isolate hover:border-transparent hover:bg-blue-500 hover:text-white focus:isolate focus:border-transparent data-[te-nav-active]:border-[#2563eb] data-[te-nav-active]:!text-[#000]"
            data-te-toggle="pill"
            data-te-target="#tabs-roles"
            role="tab"
            aria-controls="tabs-roles"
            aria-selected="false"
          >
            Roles
          </a>
        </li>
        <li role="presentation" className="lg:w-1/4 sm:w-full ">
          <a
            href="#tabs-department"
            className="my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 text-xs font-medium uppercase leading-tight text-[#4b5563] hover:isolate hover:border-transparent hover:bg-blue-500 hover:text-white focus:isolate focus:border-transparent data-[te-nav-active]:border-[#2563eb] data-[te-nav-active]:!text-[#000] "
            data-te-toggle="pill"
            data-te-target="#tabs-department"
            role="tab"
            aria-controls="tabs-roles"
            aria-selected="false"
          >
            Departments
          </a>
        </li>
        <li role="presentation" className="lg:w-1/4 sm:w-full ">
          <a
            href="#tabs-branchs"
            className="my-2 block border-x-0 border-t-0  border-b-2 border-transparent px-6 py-3 text-xs font-medium uppercase leading-tight text-[#4b5563] hover:isolate hover:border-transparent hover:bg-blue-500 hover:text-white focus:isolate focus:border-transparent data-[te-nav-active]:border-[#2563eb] data-[te-nav-active]:!text-[#000] "
            data-te-toggle="pill"
            data-te-target="#tabs-branchs"
            role="tab"
            aria-controls="tabs-branchs"
            aria-selected="false"
          >
            Branchs
          </a>
        </li>
      </ul>
      <div>
        <div
          className=" bg-white hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block elevation-15 rounded-lg overflow-x-hidden"
          id="tabs-employee"
          role="tabpanel"
          aria-labelledby="tabs-employee-tab"
          data-te-tab-active
        >
          <div className="flex justify-end pt-3 pr-5  max-lg:flex max-sm:justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
              onClick={() => {
                setOpenModalEmployee(true);
              }}
            >
              Add Employee
            </button>
          </div>
          <div className="flex justify-end items-center mt-4 mr-5 gap-x-5 max-sm:justify-center">
            <p className="text-xl ">Search:</p>
            <input
              type="text "
              className="border-black border-[1px]  rounded-lg py-2 pl-3 sm:pl-1 lg:w-4/12 sm:w-4/12"
              placeholder="Search Employee"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                employeelistMethods.setSearchText(e.target.value)
              }
            />
          </div>
          <DataTable
            columns={employeelistData?.columns}
            data={employeelistData?.allEmployees}
            customStyles={employeelistData?.customStyles}
            progressPending={employeelistData?.pending}
            responsive={false}
            progressComponent={
              <ClipLoader
                color={'#b5f1dd'}
                loading={employeelistData?.pending}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            }
            pagination
          />
        </div>
        <div
          className="bg-white hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block elevation-15 rounded-lg overflow-x-hidden"
          id="tabs-department"
          role="tabpanel"
          aria-labelledby="tabs-department-tab"
        >
          <div className="flex justify-end pt-3 pr-4">
            <input
              type="text"
              placeholder="New Department"
              className="mr-4 border-[1px] border-black rounded-lg px-3"
              onChange={(e) =>
                departmentListMethods.setNewDepartment(e.target.value)
              }
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs"
              onClick={() => {
                departmentListMethods.addDeppartmentList();
              }}
            >
              Add Department
            </button>
          </div>
          <div className="flex justify-end items-center mt-4 mr-5 gap-x-5">
            <p className="text-xl">Search:</p>
            <input
              type="text "
              className="border-black border-[1px] w-2/12 rounded-lg py-2 pl-3 sm:pl-1 lg:w-4/12 sm:w-4/12"
              placeholder="Search Department"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                departmentListMethods.setSearchText(e.target.value)
              }
            />
          </div>
          <DataTable
            columns={departmentListData?.columns}
            data={departmentListData?.allDepartments}
            customStyles={departmentListData?.customStyles}
            responsive={false}
            progressComponent={
              <ClipLoader
                color={'#b5f1dd'}
                loading={departmentListData?.pending}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            }
            pagination
          />
        </div>
        <div
          className="bg-white hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block elevation-15 rounded-lg overflow-x-hidden"
          id="tabs-roles"
          role="tabpanel"
          aria-labelledby="tabs-roles-tab"
        >
          <div className="flex justify-end pt-3 pr-5">
            <input
              type="text"
              placeholder="New Role"
              className="mr-4 border-[1px] border-black rounded-lg px-3"
              onChange={(e) => roleListMethods.setNewRole(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                roleListMethods.addRoleList();
              }}
            >
              Add Role
            </button>
          </div>
          <div className="flex justify-end items-center mt-4 mr-5 gap-x-5">
            <p className="text-xl">Search:</p>
            <input
              type="text "
              className="border-black border-[1px] rounded-lg py-2 pl-3 sm:pl-1 lg:w-4/12 sm:w-4/12"
              placeholder="Search Role"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                roleListMethods.setSearchText(e.target.value)
              }
            />
          </div>
          <DataTable
            columns={roleListData?.columns}
            data={roleListData?.allRoles}
            customStyles={roleListData?.customStyles}
            responsive={false}
            progressComponent={
              <ClipLoader
                color={'#b5f1dd'}
                loading={roleListData?.pending}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            }
            pagination
          />
        </div>
        <div
          className="bg-white hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block elevation-15 rounded-lg overflow-x-hidden"
          id="tabs-branchs"
          role="tabpanel"
          aria-labelledby="tabs-branchs-tab"
        >
          <div className="flex justify-end pt-3 pr-5">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                setOpenModalBranch(true);
              }}
            >
              Add Branch
            </button>
          </div>
          <div className="flex justify-end items-center mt-4 mr-5 gap-x-5">
            <p className="text-xl ">Search:</p>
            <input
              type="text "
              className="border-black border-[1px] w-2/12 rounded-lg py-2 pl-3 sm:pl-1 lg:w-4/12 sm:w-4/12 "
              placeholder="Search Branch"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                branchsListMethods.setSearchText(e.target.value)
              }
            />
          </div>
          <DataTable
            columns={branchListData?.columns}
            data={branchListData?.allBranchs}
            customStyles={branchListData?.customStyles}
            responsive={false}
            progressComponent={
              <ClipLoader
                color={'#b5f1dd'}
                loading={branchListData?.pending}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            }
            pagination
          />
        </div>
      </div>
      <AddEmployeeModal
        showModal={openModalEmployee}
        closeModal={(e: boolean) => {
          setOpenModalEmployee(e);
        }}
      />
      <AddBranchModal
        showModal={openModalBranch}
        closeModal={(e: boolean) => {
          setOpenModalBranch(e);
        }}
      />
    </>
  );
};
