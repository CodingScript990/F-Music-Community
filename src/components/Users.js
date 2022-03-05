// Users.js
import React, { useState, useEffect } from "react";

// Function Users
function Users() {
  // useState(users, setUsers)
  const [users, setUsers] = useState();

  useEffect(() => {
    // fetch api
    fetch("/users/")
      .then((res) => {
        // response successfully!
        if (res.ok) {
          // response data => json(type)
          return res.json();
        }
      })
      .then((jsonRes) => setUsers(jsonRes.usersList));
    // json result => setUsers(usersList)
  });
  // HTML rendering
  return (
    <div>
      {/* users => map use funcion => user(value) => [HTML]<li>{user}</li> */}
      {users.map((user) => (
        <li>{user}</li>
      ))}
    </div>
  );
}

// export Users
export default Users;
