import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastMessage = (type, msg) =>
  toast[type](msg, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export default toastMessage;
