import React, { FunctionComponent, ReactNode } from 'react';

const ModalCard: FunctionComponent<{ step: number; children: ReactNode; index?: number }> = ({
  step = 0,
  children,
  index = 0,
}) => {
  return (
    <div
      style={{
        transform: `translateX(-${step * 100}%)`,
      }}
      className={`w-full flex-shrink-0 p-4 rounded-lg bg-white transition-all duration-300 max-h-min ${
        step === index ? 'opacity-100 z-40' : 'opacity-0 -z-50 pointer-events-none'
      }`}
    >
      {children}
    </div>
  );
};

export default ModalCard;
