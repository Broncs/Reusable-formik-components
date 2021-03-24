import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react';
import { Field } from 'formik';

const ChakraInput = (props) => {
  const { label, name, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }) => {
        return (
          <FormControl
            isRequired
            isInvalid={form.errors[name] && form.touched[name]}
          >
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <Input name={name} id={name} {...field} {...rest} />
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
};

export default ChakraInput;
