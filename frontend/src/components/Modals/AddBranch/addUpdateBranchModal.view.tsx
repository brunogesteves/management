import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Form, Formik } from 'formik';
import { useAddUpdateBranchModalLogic } from './addUpdateBranchModal.logic';
import { BranchSchema } from '../../../Utils/yup';
import { ToastContainer } from 'react-toastify';

import 'react-datepicker/dist/react-datepicker.css';
import type { BranchsProps } from '../../../types';

interface ModalProps {
  showModal: boolean;
  closeModal: (newstate: boolean) => void;
}

export const AddBranchModal: React.FC<ModalProps> = ({
  showModal,
  closeModal,
}) => {
  const { data, methods } = useAddUpdateBranchModalLogic();

  return (
    <>
      <Transition.Root show={showModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            closeModal(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <Formik
                    initialValues={data.initialValues}
                    validationSchema={BranchSchema}
                    onSubmit={async (values: BranchsProps, actions) => {
                      await methods.createChangeBranch(values);
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form className=" flex justify-center flex-col pt-6 px-3 gap-x-3">
                        {methods.inputFieldText('name', errors, touched)}
                        {methods.inputFieldText('address', errors, touched)}
                        {methods.inputFieldText('email', errors, touched)}
                        {methods.inputFieldText('city', errors, touched)}
                        {methods.inputFieldNumber(
                          'phone',
                          errors,
                          touched,
                          '(99)9999-9999'
                        )}
                        {methods.inputFieldText('state', errors, touched)}

                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                          <button
                            type="submit"
                            className="inline-flex w-full justify-center rounded-md  px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto bg-[#b5f1dd] border-black"
                          >
                            {data.initialValues.id !== 0
                              ? 'Update Branch'
                              : 'Add Branch'}
                          </button>
                          <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            onClick={() => {
                              closeModal(false);
                              methods.setInitialValues({
                                address: '',
                                city: '',
                                email: '',
                                name: '',
                                phone: '',
                                state: '',
                                id: 0,
                              });
                            }}
                          >
                            Cancel
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <div>
        <ToastContainer />
      </div>
    </>
  );
};
