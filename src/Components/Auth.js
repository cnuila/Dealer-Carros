import React, { useEffect, useState } from "react";
import { auth, fbAuth } from "../firebase"

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fbAuth().setPersistence(fbAuth.Auth.Persistence.SESSION).then(() => {
            auth.onAuthStateChanged((user) => {
                setCurrentUser(user)
                setLoading(false)
            })
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode+": "+errorMessage)
        });

    }, []);
    if (loading) {
        return <></>
    }
    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};