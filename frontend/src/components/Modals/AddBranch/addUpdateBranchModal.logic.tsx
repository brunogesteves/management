import React, { useEffect, useState } from 'react';
import { Field } from 'formik';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_UPDATE_BRANCH } from '../../../graphQl/Mutations/branchs';
import { GET_ALL_EMPLOYEES } from '../../../graphQl/Queries';
import type { BranchsProps } from '../../../types';
import { useInfo } from '../../../context/context';
import InputMask from 'react-input-mask';

import { toast } from 'react-toastify';
import type { ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const useAddUpdateBranchModalLogic = () => {
  const { refetch } = useQuery(GET_ALL_EMPLOYEES);
  const [addUpateBranch] = useMutation(ADD_UPDATE_BRANCH);
  const [initialValues, setInitialValues] = useState<BranchsProps>({
    name: '',
    address: '',
    email: '',
    city: '',
    phone: '',
    state: '',
    id: 0,
  });

  const { allBranchs, branchId } = useInfo();

  useEffect(() => {
    if (branchId !== 0) {
      allBranchs.forEach((item) => {
        if (item.id === branchId) {
          setInitialValues(item);
        }
      });
    }
  }, [branchId]);

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
    errors: any,
    touched: any,
    mask: string
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

  function notify(message: string, success: boolean) {
    const options: ToastOptions = {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    };
    if (success) {
      toast.success(message, options);
    } else if (success) {
      toast.error(message, options);
    }
  }

  async function createChangeBranch(data: BranchsProps) {
    await addUpateBranch({
      variables: {
        data: {
          id: data.id,
          name: data.name,
          email: data.email,
          address: data.address,
          city: data.city,
          state: data.state,
          phone: data.phone,
        },
      },
      onError: () => {
        notify('Sorry, Try Again', true);
      },
      onCompleted: async () => {
        const message = branchId !== 0 ? 'Branch Updated' : 'Branch Added';
        notify(message, true);
        await refetch();
      },
    });
  }
  return {
    data: {
      initialValues,
    },
    methods: {
      inputFieldText,
      inputFieldNumber,
      createChangeBranch,
      setInitialValues,
    },
  };
};
