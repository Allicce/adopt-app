import React from "react";
import FormInputWrapper from "./FormInputWrapper";

const InputForm = ({ handleChange, label, ...otherProps }) => {
  return (
    <FormInputWrapper>
      <label>{label}</label>
      <input onChange={handleChange} {...otherProps} />
    </FormInputWrapper>
  );
};

export default InputForm;
