import React from "react";
import { Fragment } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import useAuth from "./../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Fragment>
      <Navbar
        sticky="top"
        className="customNav"
        variant="light"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              className="logo"
              src="https://i.ibb.co/2tD3QrN/logo.png"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <NavLink className="navLink" to="/home">
              Home
            </NavLink>
            <NavLink className="navLink" to="/videoCall">
              Video Call
            </NavLink>
            <NavLink className="navLink" to="/manage">
              Manage
            </NavLink>
            {/* 
<----------------- Showing Logout Button If the user is logged in ----------------->
 */}
            {user?.email ? (
              <Button className="ms-3" onClick={logOut} variant="danger">
                Logout
              </Button>
            ) : (
              <Fragment>
                <NavLink className="navLink" to="/login">
                  Login
                </NavLink>
                <NavLink className="navLink" to="/register">
                  Register
                </NavLink>
              </Fragment>
            )}
            {/* 
<----------------------- Showing Display Name of User ----------------------->
 */}
            {user?.displayName && (
              <Navbar.Text className="ms-3 text-white">
                <span>{user.displayName}</span>
              </Navbar.Text>
            )}
            {/* 
<----------------------- Showing User Display Picture ----------------------->
 */}
            {user?.photoURL && (
              <img className="displayPic ms-3" src={user.photoURL} alt="" />
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;