import { Field } from 'formik';
import {
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import React from 'react';

const ChakraSelect = (props) => {
  const { name, label, options, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }) => {
        return (
          <FormControl isInvalid={form.errors[name] && form.touched[name]}>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <Select
              name={name}
              id={name}
              {...field}
              {...rest}
              variant="outline"
            >
              {options.map((option) => {
                return (
                  <React.Fragment key={option.value}>
                    <option value={option.value}>{option.key}</option>
                  </React.Fragment>
                );
              })}
            </Select>
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
};

export default ChakraSelect;
