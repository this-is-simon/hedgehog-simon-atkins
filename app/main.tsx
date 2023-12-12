"use client";
import { Fragment } from "react";
import { login, registerUser } from "./backend";
import { Button } from "../components/Button";

export const Content = () => {
  return (
    <Fragment>
      <h1>Please register to create an account</h1>
      <Button onClick={registerUser}>Register</Button>
      <Button onClick={login}>Login</Button>
    </Fragment>
  );
};
