import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthProvider } from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthProvider);

  if (!user) {
    return <span className="loading loading-ball loading-lg"></span>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.any,
};

export default PrivateRoute;
