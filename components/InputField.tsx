import React, { InputHTMLAttributes } from "react";
import { FormControl, Input, Textarea } from "@chakra-ui/react";
import { useField } from "formik";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  textarea?: boolean;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  textarea,
  size: _,
  ...props
}) => {
  let InputOrArea = textarea ? Textarea : Input;
  const [field, { error }] = useField(props);
  return <FormControl>
    
  </FormControl>;
};
