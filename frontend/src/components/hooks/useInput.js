import React from "react";
import useValidation from "./useValidation";

export default function useInput(initialState, validations) {
  const [value, setValue] = React.useState("");
  const [isOnFocus, setIsOnFocus] = React.useState(false);
  const valid = useValidation(value, initialState, validations);

  React.useEffect(() => {
    setIsOnFocus(false);
    setValue(`${initialState}`);
  }, [initialState]);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnFocus = (state) => {
    setIsOnFocus(state);
  };

  const clearInput = () => {
    setValue("");
  };

  return {
    value,
    handleInputChange,
    clearInput,
    handleOnFocus,
    isOnFocus,
    ...valid,
  };
}
