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
  const [loading, setLoading] = useState(true)

  const handleEmailPassReg = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleProfileUpdate = (user, userName, image) => {
    setLoading(true);
    return updateProfile(user, {
      displayName: userName,
      photoURL: image,
    });
  };

  const handleLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleSubmit = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const handleSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
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
    loading
  };

  return (
    <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
  );
};

AuthContext.propTypes = {
  children: PropTypes.any,
};

export default AuthContext;
