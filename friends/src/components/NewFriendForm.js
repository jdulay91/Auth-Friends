import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function NewFriendForm() {
  return (
    <Fragment>
      <form>
        <label>
          name
          <input />
        </label>
        <label>
          age
          <input />
        </label>
        <label>
          email
          <input />
        </label>
        <button>Add Friend</button>
      </form>
    </Fragment>
  );
}
export default NewFriendForm;
