import React from "react";
import "./Header.css";
import websitelogo from "../../images/website_logo.png";
import { Container, Dropdown, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const Header = () => {
  const { user, logOut } = UseAuth();
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <NavLink to="/">
            <img
              src={websitelogo}
              width="100%"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>

            <NavLink to="/dashboard" className="nav-link">
              Dashboard
            </NavLink>

            <NavLink to="/myorders" className="nav-link">
              My Orders
            </NavLink>

            <NavLink to="/blog" className="nav-link">
              Tourist Blog
            </NavLink>

            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </Nav>
          <Nav>
            {user.email ? (
              <Nav className="d-flex align-items-center">
                <NavLink to="/login">
                  <button
                    onClick={logOut}
                    className="btn btn-danger rounded-pill text-white fw-bold"
                  >
                    Logout
                  </button>
                </NavLink>

                <Navbar.Text className="text-center">
                  <Image
                    style={{ width: "40px" }}
                    src={user.photoURL}
                    roundedCircle
                  />
                  <span className="fw-bold">{user.displayName}</span>
                </Navbar.Text>
              </Nav>
            ) : (
              <Nav>
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>

                <NavLink to="/registration" className="nav-link">
                  Registration
                </NavLink>
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
