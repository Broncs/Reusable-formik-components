import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from './Input';
import FormikControl from './FormikControl';

const FormikContainer = () => {
  const initialValues = {
    email: '',
    description: '',
  };

  const valitationSchema = Yup.object({
    email: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
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
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />
              <FormikControl
                control="textarea"
                label="Description"
                name="description"
              />

              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormikContainer;
