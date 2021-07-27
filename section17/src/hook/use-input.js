import { useState } from "react";

const useInput = (validateValue) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateValue(value);
  const hasError = !isValid && isTouched;

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  return {
    value,
    hasError,
    changeHandler,
    blurHandler,
  };
};

export default useInput;
