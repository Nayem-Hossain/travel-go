import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import travelGo from "../../images/website_logo.png"
import './Registration.css';

const Registration = () => {
  const {
    handleGoogleSignIn,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleRegistration,
    error,
  } = UseAuth();

  return (
    <div className="container border-shadow mt-5">
      <div className="row px-lg-5">
        <div className="col-lg-5 image d-flex justify-content-center align-items-center">
          <div className="text-center text-dark p-4">
            <img src={travelGo} className="img-fluid" alt="" />
            <h6 className="text-muted">Make Your Travel safe</h6>
          </div>
        </div>
        <div className="col-lg-7 long-padding background-color">
          <div className="text-center">
            <h1 className=" text-bold mb-4">Please Register for an Account</h1>
            <div className="authentication-icon my-3 bg-white rounded-pill">
              <i
                onClick={handleGoogleSignIn}
                className="fab fa-google-plus-g p-3 text-danger"
              ></i>

              <i className="fab fa-facebook-square p-3 text-primary"></i>

              <i className="fab fa-linkedin p-3 text-info"></i>
            </div>
            <p>or use email for register</p>
          </div>

          <Form onSubmit={handleRegistration}>
            <Form.Group className="mb-3" controlId="text">
              <Form.Label className="fw-bold">Name:</Form.Label>
              <Form.Control
                onBlur={handleNameChange}
                type="text"
                placeholder="Enter your name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold">Email address:</Form.Label>
              <Form.Control
                onBlur={handleEmailChange}
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-bold">Password:</Form.Label>
              <Form.Control
                onBlur={handlePasswordChange}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <p className="text-danger">{error}</p>

            <Button variant="dark" className="px-5 py-2 fw-bold" type="submit">
              Register
            </Button>
          </Form>
          <p className="text-center pt-3 m-0">
            already have an account? <Link to="/login">login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
