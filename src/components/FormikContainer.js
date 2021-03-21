import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import Input from './Input';

const FormikContainer = () => {
  const initialValues = {
    email: '',
  };

  const valitationSchema = yup.object({
    email: yup.string().required('Required'),
  });
  const onSubmit = (values) => {
    console.log('console.log', values);
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={valitationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <Input control="input" type="email" label="Email" name="email" />
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormikContainer;
