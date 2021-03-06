import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikControl from './FormikControl';
import { Button } from '@chakra-ui/react';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
    chakra: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('email is required').required('Required'),
    password: Yup.string().required('Required'),
    chakra: Yup.string().required('Required'),
  });
  const onSubmit = (values, onSubmition) => {
    setTimeout(() => {
      console.log('form values', values);
      onSubmition.setSubmitting(false);
    }, 2000);
    // console.log('submittin', onSubmition);
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
              control="chakraInput"
              type="email"
              name="email"
              label="Email"
            />
            <FormikControl
              control="chakraInput"
              type="password"
              name="password"
              label="Password"
            />
            <FormikControl
              control="chakraInput"
              name="chakra"
              label="Custom chakra input"
            />
            <Button
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid}
            >
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
