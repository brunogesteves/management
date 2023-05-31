import { Field, Form, Formik } from 'formik';
import React from 'react';
import { LoginSchema } from '../Utils/yup';

export const Login: React.FC = () => {
  const initialValues = {
    username: '',
    password: '',
  };
  return (
    <div className="elevation-15 rounded-lg bg-white flex justify-center items-center pt-5">
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form className=" flex justify-center flex-col  px-3 gap-x-3">
            <div className="flex justify-center flex-col mb-5">
              <Field
                name="username"
                placeholder="username"
                className=" w-60 border-2 border-black rounded-lg  px-3"
              />
              {errors.username && touched.username ? (
                <div className="text-red-500">{errors.username}</div>
              ) : null}
            </div>
            <div className="flex justify-center flex-col mb-5">
              <Field
                name="password"
                placeholder="password"
                className=" w-60 border-2 border-black rounded-lg  px-3 "
              />
              {errors.password && touched.password ? (
                <div className="text-red-500 ">{errors.password}</div>
              ) : null}
            </div>

            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="submit"
                className="inline-flex w-full justify-center rounded-md  px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto bg-[#b5f1dd] border-black"
              >
                Sign In
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                // onClick={() => {
                //   closeModal(false);
                // }}
              >
                Sign Up
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
