import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../useComponents/useAxiosPublic';

const SocialLogin = () => {
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const {logInWithGoogle} = useContext(AuthContext)
    const handleSocialLogin = () => {
        logInWithGoogle()
        .then(result => {
            console.log(result.user)
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                photoURL: result.user?.photoURL
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data)
                navigate('/')
            })

        })
    }
    
    return (
        <button onClick={handleSocialLogin} className="flex items-center justify-center w-full max-w-xs p-3 text-gray-700 bg-white border-2 border-green-500 rounded-lg shadow-md hover:bg-green-100 transition-all duration-300">
          <FcGoogle className="w-6 h-6 mr-2" />
          <span className="font-medium">Sign in with Google</span>
        </button>
      );
};

export default SocialLogin;