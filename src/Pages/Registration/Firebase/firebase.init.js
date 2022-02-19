import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initailaizeAuthenticaiton = () => {
  initializeApp(firebaseConfig);
};

export default initailaizeAuthenticaiton;
