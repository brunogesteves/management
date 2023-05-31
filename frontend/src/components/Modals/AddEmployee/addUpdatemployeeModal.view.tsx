import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Form, Formik } from 'formik';
import { useAddUpdateEmployeeModalLogic } from './addUpdateEmployeeModal.logic';
import { EmployeeSchema } from '../../../Utils/yup';
import DatePicker from 'react-datepicker';
import { ToastContainer } from 'react-toastify';

import 'react-datepicker/dist/react-datepicker.css';
import type { EmployeeProps } from '../../../types';

enum Status {
  active = 'active',
  inactive = 'inactive',
}

interface ModalProps {
  showModal: boolean;
  closeModal: (newstate: boolean) => void;
}

export const AddEmployeeModal: React.FC<ModalProps> = ({
  showModal,
  closeModal,
}) => {
  const { data, methods } = useAddUpdateEmployeeModalLogic();

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
                    validationSchema={EmployeeSchema}
                    onSubmit={async (values: EmployeeProps, actions) => {
                      await methods.createChangeEmployee(values);
                    }}
                  >
                    {({ errors, touched, setFieldValue }) => (
                      <Form className=" flex justify-center flex-col  px-3 gap-x-3">
                        <div className="flex justify-center items-center my-6 ">
                          {methods.uploadPicture(setFieldValue)}
                        </div>
                        {methods.inputFieldText('name', errors, touched)}
                        {methods.inputFieldText('email', errors, touched)}
                        {methods.inputFieldText('address', errors, touched)}
                        {methods.inputFieldNumber(
                          'phone',
                          '(99)9999-9999',
                          errors,
                          touched
                        )}
                        {methods.inputFieldNumber(
                          'cpf',
                          '999-999-999-99',
                          errors,
                          touched
                        )}
                        <div className="flex justify-between pt-2 pb-6 mx-10">
                          <div>
                            <span className="uppercase">birthdate</span>
                          </div>
                          <div className="h-14 ">
                            <DatePicker
                              selected={data.initialValues.birth_date}
                              dateFormat="MMMM d, yyyy"
                              name="birth_date"
                              className=" border-2 border-black w-52 rounded-lg px-3"
                              onChange={async (date: any) => {
                                data.initialValues.birth_date = date;
                                await setFieldValue('birth_date', date);
                              }}
                            />
                            {errors.birth_date && touched.birth_date ? (
                              <div className="text-red-500 text-center">
                                Required
                              </div>
                            ) : null}
                          </div>
                        </div>

                        <div className="flex justify-around mb-6">
                          {methods.selectStatus(errors, touched)}
                          {methods.selectAllBranchs(errors, touched)}
                        </div>
                        <div className="flex justify-around mb-6">
                          {methods.selectAllDepartments(errors, touched)}
                          {methods.selectAllRoles(errors, touched)}
                        </div>

                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                          <button
                            type="submit"
                            className="inline-flex w-full justify-center rounded-md  px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto bg-[#b5f1dd] border-black"
                          >
                            {data.initialValues.id !== 0
                              ? 'Upate Employee'
                              : 'Add Employee'}
                          </button>
                          <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            onClick={() => {
                              closeModal(false);
                              methods.setInitialValues({
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
                              methods.setEmployeeId(0);
                            }}
                          >
                            Close
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
