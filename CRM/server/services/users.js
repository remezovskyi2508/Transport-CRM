import { client } from "../db/db.js";
import bcrypt from "bcrypt";

export const getUsers = async () => {
  const { rows } = await client.query("SELECT * FROM users;");
  return rows;
};

export const getUser = async (id) => {
  const { rows } = await client.query("SELECT * FROM users WHERE id = $1;", [
    id,
  ]);
  return rows[0];
};

export const addUser = async (username, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const { rows } = await client.query(
    "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username, created_at, updated_at;",
    [username, hashedPassword]
  );
  return rows[0];
};

export const deleteUser = async (id) => {
  const { rowCount } = await client.query("DELETE FROM users WHERE id = $1;", [
    id,
  ]);
  return rowCount;
};
