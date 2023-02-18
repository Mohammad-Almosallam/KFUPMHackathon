import React from "react";
import { getAllUsers } from "../auth/authService";

function Profile() {
  const allU = getAllUsers();
  return (
    <div>
      <ul>
        {allU.map((u) => {
          return <li>{allU.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Profile;
