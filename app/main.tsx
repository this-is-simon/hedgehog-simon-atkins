"use client";
import { Fragment } from "react";

export const Content = () => {
  const handleRegister = () => {
    fetch("http://localhost:3002/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: "Simon",
        last_name: "Atkins",
        email: "test@simon.com",
        password: "hello",
        password_confirmation: "hello",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  const handleLogin = () => {
    fetch("http://localhost:3002/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "test@simon.com",
        password: "hello",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <Fragment>
      <div>Hello this is the homepage, so you want to login?</div>
      <button onClick={() => handleRegister()}>Register</button>
      <button onClick={() => handleLogin()}>Login</button>
    </Fragment>
  );
};
