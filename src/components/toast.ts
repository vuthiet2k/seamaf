import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifySuccess = (message: string) =>
  toast(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    // newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type: "success",
  });

export const notifyError = (message: string) =>
  toast(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    // newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type: "error",
  });
