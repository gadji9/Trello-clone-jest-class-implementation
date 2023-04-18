import React, { FunctionComponent } from 'react';
import { IRoundedInput } from './RoundedInput';

const PureInput: FunctionComponent<Omit<IRoundedInput, 'label'>> = ({
  type = 'email',
  placeholder,
  value,
  onChange,
  onBlur = () => {},
  onFocus = () => {},
  onEnter = () => {},
  bordered = true,
  disabled = false,
  error,
}) => {
  const onKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      onEnter();
    }
  };

  return (
    <input
      type={type}
      value={value}
      className={`outline-none text-gray-900 rounded-lg font-light block w-full px-4 py-2.5 
      ${bordered && 'border border-gray-300'} ${error && 'border-[#FF0000]'}`}
      placeholder={placeholder}
      onChange={e => {
        onChange(e.target.value);
      }}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      disabled={disabled}
    />
  );
};

export default PureInput;
