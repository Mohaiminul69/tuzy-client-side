import React from "react";
import useAuth from "../../Hooks/useAuth";
import { Container } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  const handleGoogleLogin = () => {
    signInUsingGoogle().then((res) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div className="bgLogin">
      <Container>
        <h1>Login</h1>
        <button onClick={handleGoogleLogin} className="btn btn-danger">
          Login with Google
        </button>
      </Container>
    </div>
  );
};

export default Login;
