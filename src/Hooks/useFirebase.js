import initailaizeAuthenticaiton from "../Pages/Registration/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";

initailaizeAuthenticaiton();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorr, setErrorr] = useState("");
  const [success, setSuccess] = useState(false);
  const [addmin, setAddmin] = useState({});
  const auth = getAuth();

  // google  sign in pop up
  const googleProvider = new GoogleAuthProvider();
  const googleSighIn = (location, history) => {
    // setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
        history.push(location?.state?.from || "/");
        setErrorr("");
      })
      .catch((error) => {
        setErrorr(error.errorMessage);
      });
    // .finally(() => setIsLoading(false));
  };

  // Register
  const registerUser = (email, password, name, phone, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email, displayName: name, phoneNumber: phone };
        setUser(newUser);
        // sve user to database
        saveUser(email, name, "POST");
        //send to firebase
        updateProfile(auth.currentUser, {
          displayName: name,
          phoneNumber: parseInt(phone),
        })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
        setErrorr("");
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
  }, [auth]);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAddmin(data));
  }, [user.email]);

  const saveUser = (email, name, method) => {
    const userDetail = { email, name };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userDetail),
    }).then();
  };

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
    addmin,
    googleSighIn,
    logOut,
    login,
  };
};

export default useFirebase;
