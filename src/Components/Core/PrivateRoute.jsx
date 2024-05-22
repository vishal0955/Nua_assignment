import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = localStorage.getItem("auth");
  const token = auth ? auth : null; // Parse the token from localStorage
  console.log('token: ', token);

  if (token !== null) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
