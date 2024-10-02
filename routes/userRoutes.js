import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

import { checkToken } from "../middleware/checkToken.js";
// EXPRESS' router
const router = Router();

// get all users
router.get("/getAll", getAllUsers);
// get user by id
router.get("/getUserById/:id", getUserById);
// create user
router.post("/createUser", createUser);
// update user
router.put("/updateUser/:id", checkToken, updateUser);
// delete user
router.delete("/deleteUser/:id", deleteUser);

export default router;
