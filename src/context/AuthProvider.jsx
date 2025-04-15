import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from '../useComponents/useAxiosPublic';



const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic()
    const userPhotoURL=user?.photoURL

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if(currentUser){
                // get token and stroe cliend
                const userInfo = {email: currentUser.email};
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                    }
                })
            }
            else{
                //do something
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    },[axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logInWithGoogle,
        logOutUser,
        updateUserProfile,
        userPhotoURL
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;