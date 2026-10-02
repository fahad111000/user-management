import express from "express";
import { validateUser } from "../middleware/middleware.js";
import { getUsers, getUser, postUser, patchUser, deleteUser } from "../controller/controller.js";

const router = express.Router();


router.get("/:id", getUser)
router.get("/", getUsers);
router.post('/', validateUser, postUser);
router.patch("/:id", patchUser)
router.delete("/:id", deleteUser)



export default router;