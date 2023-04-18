import React, { FunctionComponent } from "react";

interface ITrash {
  widht?: string | number;
  height?: string | number;
}

const Trash: FunctionComponent<ITrash> = ({ widht = 27, height = 30 }) => {
  return (
    <>
      <svg
        width={widht}
        height={height}
        viewBox="0 0 27 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.20833 30C3.51389 30 2.92361 29.7569 2.4375 29.2708C1.95139 28.7847 1.70833 28.1944 1.70833 27.5V3.75H0V1.25H7.83333V0H18.8333V1.25H26.6667V3.75H24.9583V27.5C24.9583 28.1667 24.7083 28.75 24.2083 29.25C23.7083 29.75 23.125 30 22.4583 30H4.20833ZM22.4583 3.75H4.20833V27.5H22.4583V3.75ZM8.625 23.9167H11.125V7.29167H8.625V23.9167ZM15.5417 23.9167H18.0417V7.29167H15.5417V23.9167ZM4.20833 3.75V27.5V3.75Z"
          fill="#f2f2f2"
        />
      </svg>
    </>
  );
};

export default Trash;
