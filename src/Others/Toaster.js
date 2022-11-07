import { toast } from "react-toastify";

export const toastSuccess = () => {
  toast.success("you have logged out", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
  });
};

// https://github.com/fkhadra/react-toastify
