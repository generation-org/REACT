import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import { connect } from "react-redux";

const Navigationbar = (props) => {
  const { auth } = props;
  const render_user = () => {
    if (auth) {
      return <NavItem title="Item">Welcome User</NavItem>;
    } else {
      return (
        <>
          <NavItem title="Item">
            <li className="RightNav">
              <Link to="/login">Log In</Link>
            </li>
          </NavItem>
          <NavItem title="Item">
            <li className="RightNav">
              <Link to="/register">Sign Up</Link>
            </li>
          </NavItem>
        </>
      );
    }
  };
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/home">Kommonplaces</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav pullright="true" className="navright">
          <NavItem href="#">
            <li className="RightNav">
              <Link to="/">Activities</Link>
            </li>
          </NavItem>
          <NavItem href="#">
            <li className="RightNav">
              <Link to="/">List Your Space</Link>
            </li>
          </NavItem>
          {render_user()}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = state => ({
  auth: state.verifyLogin.auth
});


export default connect(mapStateToProps)(Navigationbar);
