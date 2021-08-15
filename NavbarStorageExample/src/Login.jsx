import React, { useCallback } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { auth_enable, auth_disable } from "./store";

const Login = props => {
  const dispatch = useDispatch();
  const login = useCallback(() => dispatch(auth_enable()), [dispatch]);
  const logout = useCallback(() => dispatch(auth_disable()), [dispatch]);

  const redirect_home = func => {
    func();
    props.history.push("/");
  };
  return (
    <>
      <Button className="btn-primary" onClick={() => redirect_home(login)}>
        Login
      </Button>
      <Button className="btn-primary" onClick={() => redirect_home(logout)}>
        Logout
      </Button>
    </>
  );
};

export default Login;
