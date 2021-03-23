import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikControl from './FormikControl';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('email is required').required('Required'),
    password: Yup.string().required('Required'),
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
        console.log(formik);
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
              type="password"
              name="password"
              label="Password"
            />
            <button
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
