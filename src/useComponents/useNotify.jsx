import { toast } from 'react-toastify';

const useNotify = (message, color) => 
    toast.success(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        style: {
          backgroundColor: "white",
          color: color,
        },
      });

export default useNotify;