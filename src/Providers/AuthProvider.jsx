/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from './../Firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";




export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // Email-Password 1st step User Create
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Email-Password 2nd step Sign In
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign In With Google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // User LogOut 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        // console.log("my name is")
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        // setLoading(false)

        return () => {
            unSubscribe()
        }
    }, [])

    // Value
    const authInfo = { user, createUser, signIn, handleUpdateProfile, logOut, loading, signInWithGithub, signInWithGoogle }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;