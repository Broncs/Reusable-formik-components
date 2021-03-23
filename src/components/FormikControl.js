import React from 'react';
import ChakraInput from './ChakraInput';
import ChakraSelect from './ChakraSelect';
import ChakraTextarea from './ChakraTextarea';
import CheckboxGroup from './CheckboxGroup';
import DatePicker from './DatePicker';
import Input from './Input';
import RadioButtons from './RadioButtons';
import Select from './Select';
import Textarea from './Textarea';

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
      return <Textarea {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'radio':
      return <RadioButtons {...rest} />;
    case 'checkbox':
      return <CheckboxGroup {...rest} />;
    case 'date':
      return <DatePicker {...rest} />;
    case 'chakraInput':
      return <ChakraInput {...rest} />;
    case 'chakraTextarea':
      return <ChakraTextarea {...rest} />;
    case 'chakraSelect':
      return <ChakraSelect {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
