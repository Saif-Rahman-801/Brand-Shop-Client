import PropTypes from "prop-types";
import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthProvider = createContext(null);
const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const authInfo = {};

  return (
    <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
  );
};

AuthContext.propTypes = {
  children: PropTypes.any,
};

export default AuthContext;
