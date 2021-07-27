import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (prevState, action) => {
  if (action.type === "INPUT")
    return { value: action.value, isTouched: prevState.isTouched };
  if (action.type === "BLUR")
    return { isTouched: true, value: prevState.value };
  if (action.type === "RESET") return { isTouched: false, value: "" };

  return initialInputState;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const isValid = validateValue(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const valueChangeHandler = (e) => {
    dispatch({ type: "INPUT", value: e.target.value });
  };

  const valueBlurHandler = (e) => {
    dispatch({ type: "BLUR" });
  };

  const resetValue = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    resetValue,
  };
};

export default useInput;
