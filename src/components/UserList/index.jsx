import React from "react";
import User from "../User/index.jsx";
import "./index.css";

function UserList(props) {
  const { users } = props;

  return (
    <div className="wrapper">
      {users.length > 0 &&
        users.map((user, index) => {
          return <User key={index} user={user}></User>;
        })}
    </div>
  );
}

export default UserList;
