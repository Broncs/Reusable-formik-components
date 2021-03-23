import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikControl from './FormikControl';
import { Button } from '@chakra-ui/react';

const ChakraExemples = () => {
  const initialValues = {
    email: '',
    password: '',
    chakra: '',
    chakratextarea: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('email is required').required('Required'),
    password: Yup.string().required('Required'),
    chakra: Yup.string().required('Required'),
    chakratextarea: Yup.string().required('Required'),
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
        {
          /* console.log(formik); */
        }
        return (
          <Form>
            <FormikControl
              control="chakrainput"
              type="email"
              name="email"
              label="Email"
            />
            <FormikControl
              control="chakrainput"
              type="password"
              name="password"
              label="Password"
            />
            <FormikControl
              control="chakrainput"
              name="chakra"
              label="Custom chakra input"
            />
            <FormikControl
              control="chakratextarea"
              name="chakratextarea"
              label="Custom chakra textarea"
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

export default ChakraExemples;
