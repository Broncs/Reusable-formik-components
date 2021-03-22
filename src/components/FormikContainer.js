import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const FormikContainer = () => {
  const dropDownOptions = [
    {
      key: 'Select an option',
      value: '',
    },
    {
      key: 'Option 1',
      value: 'option1',
    },
    {
      key: 'Option 2',
      value: 'option2',
    },
    {
      key: 'Option 3',
      value: 'option3',
    },
  ];
  const radioOptions = [
    {
      key: 'Option 1',
      value: 'rOption1',
    },
    {
      key: 'Option 2',
      value: 'rOption2',
    },
    {
      key: 'Option 3',
      value: 'rOption3',
    },
  ];
  const checkboxOptions = [
    {
      key: 'Option 1',
      value: 'cOption1',
    },
    {
      key: 'Option 2',
      value: 'cOption2',
    },
    {
      key: 'Option 3',
      value: 'cOption3',
    },
  ];
  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkboxOption: [],
  };

  const valitationSchema = Yup.object({
    email: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkboxOption: Yup.array().min(1, 'field must have at least 1 items'),
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
              <FormikControl
                control="select"
                label="Select a topic"
                name="selectOption"
                options={dropDownOptions}
              />
              <FormikControl
                control="radio"
                label="Select a radio"
                name="radioOption"
                options={radioOptions}
              />
              <FormikControl
                control="checkbox"
                label="Pick options"
                name="checkboxOption"
                options={checkboxOptions}
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
