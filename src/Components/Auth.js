import React, { useEffect, useState } from "react";
import { auth, a } from "../firebase"

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        

        
        auth.setPersistence(a.Auth.Persistence.SESSION).then(() => {
            auth.onAuthStateChanged(setCurrentUser);
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode + " " + errorMessage)
        });




    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};