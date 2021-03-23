import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikControl from './FormikControl';

const RegistrationForm = () => {
  const options = [
    {
      key: 'Email',
      value: 'emailmoc',
    },
    {
      key: 'Telephone',
      value: 'telephonemoc',
    },
  ];

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    modeOfContact: '',
    phone: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().email('is not a valid email').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'passwords must match')
      .required('Rquired'),
    modeOfContact: Yup.string().required('required'),
    phone: Yup.string().when('modeOfContact', {
      is: 'telephonemoc',
      then: Yup.string().required('Required'),
    }),
  });

  const onSubmit = (values, onSubmitting) => {
    setTimeout(() => {
      console.log('VaLUES', values);
      onSubmitting.setSubmitting(false);
      onSubmitting.resetForm();
    }, 2000);
    // console.log('sumitted data', onSubmitting);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              name="email"
              label="Email"
            />
            <FormikControl
              control="input"
              label="Password"
              name="password"
              type="password"
            />
            <FormikControl
              control="input"
              label="Confirm Password"
              type="password"
              name="confirmPassword"
            />
            <FormikControl
              control="radio"
              name="modeOfContact"
              label="Mode of contact"
              options={options}
            />
            <FormikControl
              control="input"
              type="tel"
              label="Phone"
              name="phone"
            />

            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegistrationForm;
