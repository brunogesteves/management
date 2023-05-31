import React, { useEffect, useState } from 'react';
import { Field } from 'formik';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_UPDATE_EMPLOYEE } from '../../../graphQl/Mutations/employee';
import { GET_ALL_EMPLOYEES } from '../../../graphQl/Queries';
import type { EmployeeProps } from '../../../types';
import { useInfo } from '../../../context/context';
import { useDropzone } from 'react-dropzone';
import InputMask from 'react-input-mask';

import { toast } from 'react-toastify';
import type { ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

enum Status {
  active = 'active',
  inactive = 'inactive',
}

export const useAddUpdateEmployeeModalLogic = () => {
  const { refetch } = useQuery(GET_ALL_EMPLOYEES);
  const [addUpdateEmployee] = useMutation(ADD_UPDATE_EMPLOYEE);
  const [files, setFiles] = useState<any[]>([]);
  const [employeeAvatar, setEmployeeAvatar] = useState<string>('');
  const [initialValues, setInitialValues] = useState<EmployeeProps>({
    phone: '',
    name: '',
    address: '',
    birth_date: new Date(),
    branchID: 0,
    cpf: '',
    departmentID: 0,
    email: '',
    id: 0,
    roleID: 0,
    status: Status.active,
    image: '',
  });

  const {
    allBranchs,
    allDepartments,
    allRoles,
    allEmployees,
    employeeId,
    setEmployeeId,
  } = useInfo();

  useEffect(() => {
    if (employeeId !== 0) {
      allEmployees.forEach((item) => {
        if (item.id === employeeId) {
          setInitialValues({
            ...item,
            birth_date: new Date(Number(item.birth_date)),
          });
          setEmployeeAvatar(item.image);
        }
      });
    }
    setFiles([]);
  }, [employeeId]);

  function inputFieldText(fieldLabel: string, errors: any, touched: any) {
    return (
      <div className="flex justify-between pt-2 mx-10">
        <span className="uppercase">{fieldLabel}</span>
        <div className=" h-14 ">
          <Field
            name={fieldLabel}
            placeholder={fieldLabel}
            className=" w-52 border-2 border-black rounded-lg placeholder:px-1 px-3"
          />
          {errors[fieldLabel] && touched[fieldLabel] ? (
            <div className="text-red-500 text-center">{errors[fieldLabel]}</div>
          ) : null}
        </div>
      </div>
    );
  }

  function inputFieldNumber(
    fieldLabel: string,
    mask: string,
    errors: any,
    touched: any
  ) {
    return (
      <div className="flex justify-between pt-2 mx-10">
        <span className="uppercase">{fieldLabel}</span>
        <div className=" h-14 ">
          <Field
            name={fieldLabel}
            placeholder={fieldLabel}
            className=" w-52 border-2 border-black rounded-lg placeholder:px-1 px-3"
            as={InputMask}
            mask={mask}
          />
          {errors[fieldLabel] && touched[fieldLabel] ? (
            <div className="text-red-500 text-center">{errors[fieldLabel]}</div>
          ) : null}
        </div>
      </div>
    );
  }

  function selectStatus(errors: any, touched: any) {
    return (
      <div className="h-14 flex justify-start items-center flex-col text-center  pt-2 ">
        <Field
          component="select"
          name="status"
          className="w-44 flex text-md text-center"
        >
          <option value="">Select Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </Field>

        {errors.status && touched.status ? (
          <div className="text-red-500 text-center">{errors.status}</div>
        ) : null}
      </div>
    );
  }

  function selectAllBranchs(errors: any, touched: any) {
    return (
      <div className="h-14 flex justify-start items-center flex-col text-center  pt-2 ">
        <Field
          component="select"
          name="branchID"
          className="w-44 flex  text-md text-center"
        >
          <option value="">Select Branch</option>

          {allBranchs?.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </Field>

        {errors.branchID && touched.branchID ? (
          <div className="text-red-500 text-center">{errors.branchID}</div>
        ) : null}
      </div>
    );
  }

  function selectAllDepartments(errors: any, touched: any) {
    return (
      <div className="h-14 flex justify-start items-center flex-col text-center  pt-2 ">
        <Field
          component="select"
          name="roleID"
          className="w-44 flex text-md text-center"
        >
          <option value="">Select Department</option>

          {allDepartments?.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </Field>

        {errors.roleID && touched.roleID ? (
          <div className="text-red-500 text-center">{errors.roleID}</div>
        ) : null}
      </div>
    );
  }

  function selectAllRoles(errors: any, touched: any) {
    return (
      <div className="h-14 flex justify-start items-center flex-col text-center  pt-2 ">
        <Field
          component="select"
          name="departmentID"
          className="w-44 flex text-md text-center"
        >
          <option value="">Select Role</option>

          {allRoles?.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </Field>

        {errors.departmentID && touched.departmentID ? (
          <div className="text-red-500 text-center">{errors.departmentID}</div>
        ) : null}
      </div>
    );
  }

  function notify(message: string, success: boolean) {
    const options: ToastOptions = {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    };
    if (success) {
      toast.success(message, options);
    } else if (!success) {
      toast.error(message, options);
    }
  }

  async function createChangeEmployee(data: EmployeeProps) {
    await addUpdateEmployee({
      variables: {
        data: {
          phone: data.phone,
          name: data.name,
          address: data.address,
          birth_date: new Date(data.birth_date),
          branchID: Number(data.branchID),
          cpf: data.cpf,
          departmentID: Number(data.departmentID),
          email: data.email,
          id: data.id,
          roleID: Number(data.roleID),
          status: data.status,
          image: data.image,
        },
      },
      onError: () => {
        notify('', true);
      },
      onCompleted: async () => {
        const message = employeeId !== 0 ? 'User Updated' : 'User Added';
        notify(message, true);
        await refetch();
      },
    });
  }

  const thumbs = files.map((file) => (
    <img
      key={file.preview}
      src={file.preview}
      className="flex justify-center w-12 mb-3"
      onLoad={() => {
        URL.revokeObjectURL(file.preview);
      }}
    />
  ));

  function nameLengthValidator(file: any) {
    if (file.size > 14000) {
      return {
        code: 'name-too-large',
        message: 'arquivo grande',
      };
    }

    return null;
  }

  function uploadPicture(setFieldValue: any) {
    const { getRootProps, open } = useDropzone({
      noClick: true,
      noKeyboard: true,
      maxFiles: 1,
      validator: nameLengthValidator,
      accept: {
        'image/*': [],
      },
      onDrop: async (files: any) => {
        const file = files[0];
        if (file) {
          const reader = new FileReader();
          reader.addEventListener('load', async () => {
            await setFieldValue('image', reader.result);
          });
          reader.readAsDataURL(file);
          setFiles([]);
          setFiles(
            files.map((file: any) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            )
          );
        } else {
          notify('File too big', false);
        }
      },
    });

    return (
      <div>
        <div {...getRootProps({ className: 'dropzone' })}>
          {thumbs.length !== 0 ? (
            thumbs
          ) : (
            <img
              src={employeeAvatar}
              className="flex justify-center w-12 mb-3"
            />
          )}

          <button
            type="button"
            onClick={open}
            className="bg-[#c9c9cc] border-2 border-black p-1 my-3 elevation-5"
          >
            Escolher uma foto
          </button>
        </div>
      </div>
    );
  }

  return {
    data: {
      initialValues,
      employeeId,
    },
    methods: {
      inputFieldText,
      inputFieldNumber,
      selectStatus,
      createChangeEmployee,
      selectAllBranchs,
      selectAllDepartments,
      selectAllRoles,
      setInitialValues,
      setEmployeeId,
      uploadPicture,
    },
  };
};
