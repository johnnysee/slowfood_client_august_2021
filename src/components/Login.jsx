import axios from "axios";
import React, { useState } from "react";
import { Container, Modal, Form, Input, Button } from "semantic-ui-react";
import { validateEmail } from "./validateEmail";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [validEmail, setValidEmail] = useState(true);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios({
      method: "post",
      url: "https://slowfood.heroku.com/api/auth/sign_in/",
      params: {
        email: userEmail,
        password: userPassword,
      },
    }).then((response) => {
      if (response.data.status === "success") {
        setOpen(true);
      }
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Field
          data-cy="email-input"
          control={Input}
          label="Email"
          id="form-input-control-error-email"
          placeholder="example@email.com"
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
