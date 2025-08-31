import { Router } from "express";
import { addUserController, deleteUserController, getUserController, getUsersController } from "../controllers/users.js";

const usersRouter = Router();

usersRouter.get("/", getUsersController);

usersRouter.get("/:id", getUserController);

usersRouter.post("/", addUserController);

usersRouter.delete("/:id", deleteUserController);

export default usersRouter;
