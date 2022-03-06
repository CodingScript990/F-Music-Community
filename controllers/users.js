// users.js
// import(v4, uuid)
import { v4 as uuid } from "uuid";

// users array(Initial)
let users = [];

// export getUsers(users data)
export const getUsers = (req, res) => {
  // send data(users)
  res.send(users);
};

// export postUser(user data)
export const postUser = (req, res) => {
  // user value(req.body)
  const user = req.body;

  // users push(create)
  users.push({
    // user data
    ...user,
    // id => uuid
    id: uuid(),
  });
  // response msg
  res.send("User Added Successfully!");
};

// export getUser(user data)
export const getUser = (req, res) => {
  // singleUser value
  const singleUser = users.filter((user) => user.id === req.params.id);
  // response singleUser
  res.send(singleUser);
};

// export deleteUser(user data)
export const deleteUser = (req, res) => {
  // users value
  users = users.filter((user) => user.id !== req.params.id);
  // delete msg
  res.send("User Deleted Successfully!");
};

// export updateUser(user data)
export const updateUser = (req, res) => {
  // user value
  const user = users.find((user) => user.id === req.params.id);

  // change[user data]
  user.email = req.body.email;
  user.pw = req.body.pw;
  user.pw2 = req.body.pw2;
  user.nm = req.body.nm;

  // response msg
  res.send("User Updated Successfully!");
};
