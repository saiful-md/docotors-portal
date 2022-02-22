import initailaizeAuthenticaiton from "../Pages/Registration/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

initailaizeAuthenticaiton();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorr, setErrorr] = useState("");
  const [success, setSuccess] = useState(false);
  const auth = getAuth();
  const history = useHistory();

  // Register
  const registerUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setErrorr(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  //login
  const login = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        const distination = location?.state?.from || "/";
        history.replace(distination);
        setSuccess(true);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorr(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  // verify user.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
      setSuccess(false);
    });
    return () => unsubscribe;
  }, []);

  //log-out
  const logOut = (history) => {
    setIsLoading(true);
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        history.push("/");
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    registerUser,
    isLoading,
    errorr,
    success,
    logOut,
    login,
  };
};

export default useFirebase;
