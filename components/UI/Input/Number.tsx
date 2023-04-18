import React, { FunctionComponent } from 'react';
import PureInput from './PureInput';
import { IRoundedInput } from './RoundedInput';

const NumberInput: FunctionComponent<Omit<IRoundedInput, 'type'>> = ({
  label,
  placeholder,
  value,
  onChange,
  onBlur = () => {},

  error,
  displayErrorType = 'message',
}) => {
  return (
    <>
      <div className="w-full">
        <label className="block mb-2 text-gray-900 h-5">{label}</label>
        <PureInput
          type="number"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          error={['border', 'both'].includes(displayErrorType) ? error : ''}
        />
        <div className="mt-2 text-sm text-[#FF0000]">
          {error && ['message', 'both'].includes(displayErrorType) && (
            <p className="color-[#FF0000]">{error}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default NumberInput;
