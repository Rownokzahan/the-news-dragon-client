import React from 'react';
import { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({displayName:'Rupa'})

    const auth = getAuth(app);

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        user,
        register,
        login,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;