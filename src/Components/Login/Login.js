import React from "react";
import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
  const { user, signInUsingGoogle, logOut } = useFirebase();
  return (
    <div>
      <h1>Login</h1>
      <button onClick={signInUsingGoogle} className="btn btn-danger">
        Login with Google
      </button>
      <button onClick={logOut} className="btn btn-danger">
        Logout
      </button>
    </div>
  );
};

export default Login;
