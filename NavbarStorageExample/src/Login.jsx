import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import auth_enable  from "./actions/auth_enable";
import auth_disable  from "./actions/auth_disable";


const Login = props => {

  const redirect_home = func => {
    func();
    props.history.push("/");
  };

  const { auth_enable, auth_disable } = props;
  
  return (
    <>
      <Button className="btn-primary" onClick={() => redirect_home(auth_enable)}>
        Login
      </Button>
      <Button className="btn-primary" onClick={() => redirect_home(auth_disable)}>
        Logout
      </Button>
    </>
  );
};


const mapDispatchToProps = dispatch => ({
  auth_enable: () => dispatch(auth_enable()),
  auth_disable: () => dispatch(auth_disable()),
});

export default connect(null, mapDispatchToProps)(Login);
