// this will fetch the user from the firebase
import React , {createContext , useState , useEffect, useContext } from "react";
import {auth} from '../firebase';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
} 

export const AuthProvider = ({children}) => {

    const [currentUser ,setCurrentUser] = useState({}); 

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider);
    };

    useEffect (() => {
        const unsub = onAuthStateChanged(auth , (user) => {
            setCurrentUser(user)
            console.log(currentUser)
        });
        return () => {
            unsub();
        }
    },[currentUser]);

    return(
        <AuthContext.Provider value={{googleSignIn,currentUser}}>
            {children}
        </AuthContext.Provider>
    );
}