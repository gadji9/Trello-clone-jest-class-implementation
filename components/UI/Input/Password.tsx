import React, { FunctionComponent, useState } from "react";
import ClosedEye from "@/assets/icons/closed-eye";
import Eye from "@/assets/icons/eye";
import { IRoundedInput } from "./RoundedInput";

const PasswordInput: FunctionComponent<Omit<IRoundedInput, "type">> = ({
  label,
  placeholder,
  value,
  onChange,
  onBlur = () => {},

  error,
}) => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [isEyeHovered, setIsEyeHovered] = useState<boolean>(false);

  return (
    <div
      className="w-full  "
      onClick={() => {
        if (isShown) {
          setIsShown(false);
        }
      }}
    >
      <div className="overflow-visible ">
        <label className="block mb-2 text-gray-900 h-5">{label}</label>
        <div className="flex relative ">
          <input
            type={isShown ? "text" : "password"}
            value={value}
            className={` border border-gray-300 outline-none text-gray-900 rounded-lg font-light block w-full px-4 py-2.5 ${
              error && "border-[#FF0000]"
            }`}
            placeholder={placeholder}
            onChange={(e) => {
              if (!isShown) {
                onChange(e.target.value);
              }
            }}
            disabled={isShown}
            onBlur={onBlur}
          />
          <div
            className="absolute top-[37%] left-[90%] z-10 cursor-pointer "
            onMouseEnter={() => setIsEyeHovered(true)}
            onMouseLeave={() => setIsEyeHovered(false)}
            onClick={() => {
              setIsShown(!isShown);
            }}
          >
            {(() => {
              if (String(value).length > 0) {
                return isShown ? <ClosedEye /> : <Eye />;
              }
            })()}
          </div>

          {isEyeHovered && (
            <div className="flex items-center justify-around text-xs h-[40px] w-[150px] bg-white  absolute rounded-md shadow-md top-[80%] left-[57%] cursor-pointer ">
              <p className="opacity-50 ">
                {isShown ? "Скрыть пароль" : "Показать пароль"}
              </p>
              {isShown ? <ClosedEye /> : <Eye />}
            </div>
          )}
        </div>
        <div className="mt-2 text-sm text-[#FF0000]">
          {error && <p className="color-[#FF0000]">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;
