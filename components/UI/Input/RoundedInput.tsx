import React, { FunctionComponent } from "react";

import TextInput from "./Text";
import PasswordInput from "./Password";
import NumberInput from "./Number";

export interface IRoundedInput {
  type: "text" | "number" | "password" | "phone" | "date";
  label: string;
  placeholder?: string;
  value: string | number;
  disabled?: boolean;
  bordered?: boolean;
  onChange: (str: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  onEnter?: () => void;

  error?: string;
  displayErrorType?: "border" | "message" | "both";
}

const RoundedInput: FunctionComponent<IRoundedInput> = ({
  type,
  label,
  placeholder,
  value,
  bordered,
  onChange,
  onBlur,
  onFocus,
  onEnter,
  error,
  displayErrorType = "message",
}) => {
  return (
    <>
      {type === "text" && (
        <TextInput
          label={label}
          placeholder={placeholder}
          value={value}
          error={error}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          onEnter={onEnter}
          bordered={bordered}
          displayErrorType={displayErrorType}
        />
      )}

      {type === "number" && (
        <NumberInput
          label={label}
          placeholder={placeholder}
          value={value}
          error={error}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          onEnter={onEnter}
          bordered={bordered}
          displayErrorType={displayErrorType}
        />
      )}

      {type === "password" && (
        <PasswordInput
          label={label}
          placeholder={placeholder}
          value={value}
          error={error}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          onEnter={onEnter}
          bordered={bordered}
          displayErrorType={displayErrorType}
        />
      )}
    </>
  );
};

export default RoundedInput;
