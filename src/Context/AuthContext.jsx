import PropTypes from "prop-types";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthProvider = createContext(null);
const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const handleEmailPassReg = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleProfileUpdate = (user, userName) => {
    return updateProfile(user, {
      displayName: userName,
    });
  };

  const authInfo = { handleEmailPassReg, handleProfileUpdate };

  return (
    <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
  );
};

AuthContext.propTypes = {
  children: PropTypes.any,
};

export default AuthContext;
