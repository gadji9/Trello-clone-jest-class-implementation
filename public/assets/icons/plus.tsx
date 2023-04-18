import React, { FunctionComponent } from 'react';

interface IPluse {
  widht?: string | number;
  height?: string | number;
}

const Pluse: FunctionComponent<IPluse> = ({ widht = 50, height = 50 }) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width={widht} height={height} viewBox="0 0 1024 1024" className="icon" version="1.1"><path d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#4CAF50"/><path d="M448 298.666667h128v426.666666h-128z" fill="#FFFFFF"/><path d="M298.666667 448h426.666666v128H298.666667z" fill="#FFFFFF"/></svg>
    </>
  );
};

export default Pluse;

