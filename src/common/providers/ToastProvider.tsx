import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastProvider() {
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
         theme="dark"
         position="bottom-right"
      />
   );
}
