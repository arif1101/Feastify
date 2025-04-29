import { useContext, useState } from "react";
import bg_login_img from "../../../public/others/authentication2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { toast } from "react-toastify";
import SocialLogin from "./SocialLogin";

export default function LoginWithCaptcha() {

  const {loginUser} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/';
  console.log(location)

  const notify = () => 
    toast.success("Successfully logged in", {
      position: "top-center",  // Use a valid position
      autoClose: 1000,        // Auto close in 1s
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        backgroundColor: "white", // Green background
        color: "green",           // White text
      }
    });
  
  
  const generateCaptcha = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value && value !== captcha) {
      setError("Invalid CAPTCHA. Please try again.");
    } else {
      setError("");
    }
  };

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if(captcha === input)
        loginUser(email, password)
          .then(result => {
            notify()
            navigate(from, {replace: true})
          })
          .catch(() => {

          })
    else{
        alert('error')
    }

  };


  return (
    <div className='bg-[url("/others/authentication.png")] w-screen fixed overflow-y-scroll left-0 h-screen md:flex items-center justify-center px-3'>
      <div>
        <img className='md:max-w-[648px] md:w-[648px]' src={bg_login_img} alt="Login Background" />
      </div>
      <form onSubmit={handleLogin} className="max-w-[536px] md:w-full p-6 shadow-xl rounded-lg flex flex-col items-center justify-around">
        <label className="mr-auto text-lg font-semibold">Email</label>
        <input
        name="email"
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 border rounded text-lg"
          required
        />
        
        <label className="mr-auto text-lg font-semibold">Password</label>
        <input
        name="password"
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded text-lg"
          required
        />

        <label className="mr-auto text-lg font-semibold">CAPTCHA</label>
        <input
          type="text"
          value={captcha}
          readOnly
          className="w-full p-3 border rounded text-lg bg-gray-200 text-center font-bold mb-3 outline-none"
        />
        <input
          type="text"
          placeholder="Enter CAPTCHA"
          value={input}
          onChange={handleInputChange}
          className={`w-full p-3 border rounded text-lg ${error ? 'border-red-500' : ''}`}
          required
        />
        <p
          onClick={() => setCaptcha(generateCaptcha())}
          className="text-blue-500 text-base font-bold w-full cursor-pointer mt-1"
        >
          Refresh CAPTCHA
        </p>

        {error && <p className="text-red-500 text-lg mt-3">{error}</p>}
        
        <button className="btn w-full bg-yellow-500 mt-4 text-lg py-2 px-6 rounded hover:bg-yellow-600">
          Login
        </button>

        <div className=" w-full flex flex-col items-center mt-6">
            <p className="text-yellow-600">New here?<Link to='/register'><span className="text-xl font-bold "> Create a New Account</span></Link></p>
            <p>Or sign in with</p>
            <div className="mt-4">
              <SocialLogin></SocialLogin>
            </div>

        </div>
      </form>
    </div>
  );
}