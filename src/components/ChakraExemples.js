import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikControl from './FormikControl';
import { Button } from '@chakra-ui/react';

const ChakraExemples = () => {
  const chakraRadioOptions = [
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
  const chakraSelectOptions = [
    {
      key: 'Select an Option',
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

  const initialValues = {
    email: '',
    password: '',
    chakra: '',
    chakratextarea: '',
    chakraSelectOption: '',
    chakraRadio: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('email is required').required('Required'),
    password: Yup.string().required('Required'),
    chakra: Yup.string().required('Required'),
    chakratextarea: Yup.string().required('Required'),
    chakraSelectOption: Yup.string().required('Required'),
    chakraRadio: Yup.string().required('Required'),
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
            <FormikControl
              control="chakraTextarea"
              name="chakratextarea"
              label="Custom chakra textarea"
            />
            <FormikControl
              control="chakraSelect"
              name="chakraSelectOption"
              label="pick one"
              options={chakraSelectOptions}
            />
            <FormikControl
              control="chakraRadio"
              label="Chakra radio"
              name="chakraRadio"
              options={chakraRadioOptions}
            />

            <Button
              type="submit"
              mt={4}
              colorScheme="linkedin"
              isLoading={formik.isSubmitting}
              // disabled={formik.isSubmitting || !formik.isValid}
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
