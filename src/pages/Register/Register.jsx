import React, { useContext } from 'react';
import bg_login_img from "../../../public/others/authentication2.png";
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import useAxiosPublic from '../../useComponents/useAxiosPublic';
import axios from 'axios';

const Register = () => {
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()
  const {createUser, updateUserProfile} = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
          updateUserProfile({displayName: name})
          .then(() => {
            const userInfo = {
              name: name,
              email: email
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
              if(res.data.insertedId){
                // notify()
                navigate('/')
              }
            })
          })
        })
        .catch((error) => {
          alert(error)
        })
    }
    
    return (
        <div className='bg-[url("/others/authentication.png")] w-screen fixed left-0 h-screen flex items-center justify-center'>
        <div>
          <img className='max-w-[648px] lg:w-[648px]' src={bg_login_img} alt="Login Background" />
        </div>
        <form onSubmit={handleRegister} className="w-[536px] p-6 shadow-lg rounded-lg flex flex-col items-center justify-around">
            <h1 className='w-full text-center text-[40px] font-bold'>Sign up</h1>
        <label className="mr-auto text-lg font-semibold">Name</label>
          <input
          name="name"
            type="text"
            placeholder="Username"
            className="w-full p-3 mb-4 border rounded text-lg"
            required
          />
            
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
          <button className="btn w-full bg-yellow-500 mt-4 text-lg py-2 px-6 rounded hover:bg-yellow-600">
            Register
          </button>
  
          <div className=" w-full flex flex-col items-center mt-6">
              <p className="text-yellow-600">Already register?<Link to='/login'><span className="text-xl font-bold "> Go to log in</span></Link></p>
              <p>Or sign up with</p>
  
          </div>
        </form>
      </div>
    );
};

export default Register;