import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Fragment>
      <Link to="/login">Login</Link>
      <br/>
      <Link to="/addFriend">Add Friend</Link>
      <br/>
      <Link to="/friends">Friends</Link>
    </Fragment>
  );
}

export default Home;
