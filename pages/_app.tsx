import "@/styles/global.css";
import type { AppProps } from "next/app";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
    </div>
  );
}
