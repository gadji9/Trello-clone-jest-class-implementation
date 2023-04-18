import React, {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useEffect,
} from "react";
import { ReactFN } from "types/global";

export interface IModalBackdrop extends ReactFN {
  state?: boolean;
  setState?: Dispatch<SetStateAction<boolean>>;
  onUnblurCustomHandler?: () => any;
  customSetState?: () => any;
}

const ModalBackdrop: FunctionComponent<IModalBackdrop> = ({
  state = false,
  setState = () => {},
  customSetState = () => {},
  onUnblurCustomHandler = () => {},
  children,
}) => {
  useEffect(() => {
    if (state === true) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "visible";
      };
    }
  }, [state]);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      /** @ts-ignore */
      if (String(e.target?.className).includes("modal")) {
        setState(false);
        customSetState();
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setState(false);
        customSetState();
      }
    };

    document.addEventListener("mousedown", handleOutside);

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div
        style={{ background: "rgba(0, 0, 0, 0.4)" }}
        className={`w-screen min-h-screen fixed top-0 left-0 ${
          state ? "z-50 opacity-100" : "-z-10 opacity-0"
        }`}
        id="modalBackdrop"
        onMouseDown={(e) => {
          if (
            // @ts-ignore
            e.target.className ===
            "w-full h-full flex justify-center modal cursor-pointer"
          ) {
            setState(!state);
            onUnblurCustomHandler();
          }
        }}
      >
        <div className="w-screen h-screen overflow-y-auto modalContent">
          <div className="w-full h-full flex flex-col justify-center items-center modal cursor-pointer overflow-hidden">
            <div className="h-full w-full modal"></div>
            <div
              className={`cursor-default max-w-min max-h-min shrink-0 ${
                state ? "scale-100" : "scale-0"
              } transition-all duration-300`}
            >
              {children}
            </div>
            <div className="h-full w-full modal"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalBackdrop;
