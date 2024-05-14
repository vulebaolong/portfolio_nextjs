import { useColorScheme } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastProvider() {
   const { mode } = useColorScheme();

   return (
      <ToastContainer
         autoClose={5000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable={false}
         pauseOnHover
         theme={mode}
         position="bottom-right"
      />
   );
}
