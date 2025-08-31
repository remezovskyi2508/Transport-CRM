import * as usersServices from "../services/users.js";
import createError from "http-errors";

export const getUsersController = async (req, res, next) => {
  try {
    const users = await usersServices.getUsers();
    res.json({
      status: 200,
      message: "Successfully found users!",
      data: users,
    });
  } catch (err) {
    next(err);
  }
};

export const getUserController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await usersServices.getUser(id);

    if (!user) {
      throw createError(404, "User not found!");
    }

    res.json({
      status: 200,
      message: "Successfully found user!",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

export const addUserController = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw createError(404, "Missing required fields");
    }
    const data = await usersServices.addUser(username, password);
    res.json({
      status: 201,
      message: "Successfully created a new User!",
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const deleteUserController = async (req, res) => {
  const { id } = req.params;
  const user = await usersServices.deleteUser(id);

  if (!user) {
    throw createError(404, "User not found!");
  }

  res.status(204).send();
};
