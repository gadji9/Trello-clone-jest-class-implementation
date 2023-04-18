import React, { FunctionComponent } from 'react';
import { ReactFN } from 'types/global';

interface IButton extends ReactFN {
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const Button: FunctionComponent<IButton> = ({ onClick, children, disabled = false }) => {
  return (
    <>
      <button
        className={`rounded-md bg-secondary py-3 w-full transition-all text-white  ${
          disabled && 'opacity-50'
        }`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
