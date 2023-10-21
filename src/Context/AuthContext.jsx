import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthProvider = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleEmailPassReg = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleProfileUpdate = (user, userName, image) => {
    return updateProfile(user, {
      displayName: userName,
      photoURL: image,
    });
  };

  const handleLogOut = () => {
    return signOut(auth);
  };

  const googleSubmit = () => {
    return signInWithPopup(auth, provider);
  };

  const handleSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe;
    };
  }, []);

  const authInfo = {
    handleEmailPassReg,
    handleProfileUpdate,
    handleLogOut,
    googleSubmit,
    handleSignIn,
    user,
  };

  return (
    <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
  );
};

AuthContext.propTypes = {
  children: PropTypes.any,
};

export default AuthContext;
