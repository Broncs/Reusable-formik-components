import { Formik, Form } from 'formik';
import FormikControl from './FormikControl';
import * as Yup from 'yup';
import { Button } from '@chakra-ui/react';

const EnrollmentForm = () => {
  const dropdownOptions = [
    {
      key: 'Select a course',
      value: '',
    },
    {
      key: 'React',
      value: 'react',
    },
    {
      key: 'Angular',
      value: 'angular',
    },
    {
      key: 'Vue',
      value: 'vue',
    },
  ];

  const checkboxOptions = [
    {
      key: 'HTML',
      value: 'html',
    },
    {
      key: 'CSS',
      value: 'css',
    },
    {
      key: 'JavaScript',
      value: 'javascript',
    },
  ];

  const initialValues = {
    email: '',
    bio: '',
    course: '',
    skillset: [],
    date: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    bio: Yup.string().required('Required'),
    course: Yup.string().required('Required'),
    date: Yup.date().required('Required').nullable(true),
  });
  const onSubmit = (values, onSubmitting) => {
    console.log('VALUES', values);
    onSubmitting.resetForm();
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
              name="email"
              label="Email"
              type="email"
            />
            <FormikControl control="textarea" name="bio" label="Bio" />
            <FormikControl
              control="select"
              name="course"
              label="Course"
              options={dropdownOptions}
            />
            <FormikControl
              control="checkbox"
              name="skillset"
              label="Skillset"
              options={checkboxOptions}
            />
            <FormikControl control="date" name="date" label="Course Date" />
            <Button colorScheme="blue" type="submit" disabled={!formik.isValid}>
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default EnrollmentForm;
