// usersRoute.js
// express module
import express from "express";
// getUsers exports
import {
  getUsers,
  postUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

// Want to router(url)
const router = express.Router();

// get(url => users)
router.get("/users", getUsers);
// post(url => create)
router.post("/user", postUser);
// get(url => id)
router.get("/user/:id", getUser);
// delete(url => id)
router.delete("/user/:id", deleteUser);
// update(url => id)
router.put("/user/:id", updateUser);

// export router
export default router;
