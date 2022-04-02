import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, getIdToken,  signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuth from '../firebase/firebase.initialize';

initializeAuth()
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
  
    const [token, setToken] = useState('')

    
    const auth = getAuth()


    const registerUser = (email, password) => {
        setIsLoading(true)
        
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                setAuthError('');
               
              

            })
            .catch((error) => {

                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false))
    }


    const loginUser = (email, password) => {
        setIsLoading(true)

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);


            })
            .finally(() => setIsLoading(false));

    }




    const logOut = () => {
        setIsLoading(true);

        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));


    }

  

   


   

    // observer user state 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })
                const uid = user.uid;
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed
    }, [])





    return {
        user,
        
        isLoading,
        token,
        registerUser,
        logOut,
        loginUser,
        authError,
      

    }
};

export default useFirebase;