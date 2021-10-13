import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Input, Button } from "semantic-ui-react";
import { validateEmail } from "./validateEmail";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [loginStatus, setLoginStatus] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const response = axios({
      method: "POST",
      url: "https://desolate-beach-43985.herokuapp.com/api/auth/sign_in",
      params: {
        email: userEmail,
        password: userPassword,
      },
    });
    setLoginStatus(response.data);
  };

  return (
    <Container>
      <div data-cy="login-status">
        Status: {loginStatus ? "Logged In" : "Logged Out"}
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Field
          data-cy="email-input"
          control={Input}
          label="Email"
          id="form-input-control-error-email"
          placeholder="user@email.com"
          value={userEmail}
          onChange={(e) => {
            let inputValue = e.target.value.toLowerCase();
            setUserEmail(inputValue);
            setValidEmail(validateEmail(inputValue));
          }}
          error={
            validEmail
              ? null
              : {
                  content: "Please enter a valid email address",
                  pointing: "below",
                }
          }
        />
        <Form.Field
          data-cy="password-input"
          control={Input}
          label="Password"
          value={userPassword}
          type="password"
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <Form.Field
          data-cy="submission-login"
          id="form-button-control-public"
          control={Button}
          content="Submit"
        />
      </Form>
    </Container>
  );
};

export default Login;
