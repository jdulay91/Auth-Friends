import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Fragment>
      <form>
        <label>
          Username
          <input />
        </label>
        <label>
          Password
          <input />
        </label>
        <button>Log In</button>
      </form>
    </Fragment>
  );
}
