import React from 'react';
import { Field } from 'formik';
import {
  FormControl,
  FormLabel,
  Radio,
  FormErrorMessage,
  Stack,
  RadioGroup,
} from '@chakra-ui/react';

const ChakraRadio = (props) => {
  const { name, label, options, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }) => {
        return (
          <FormControl isInvalid={form.errors[name] && form.touched[name]}>
            <FormLabel>{label}</FormLabel>
            <RadioGroup name={name}>
              <Stack spacing={5} direction="row">
                {options.map((option) => {
                  return (
                    <React.Fragment key={option.value}>
                      <Radio
                        id={option.value}
                        {...field}
                        {...rest}
                        checked={field.value === option.value}
                        value={option.value}
                      >
                        {option.key}
                      </Radio>
                    </React.Fragment>
                  );
                })}
              </Stack>
            </RadioGroup>
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
};

export default ChakraRadio;
