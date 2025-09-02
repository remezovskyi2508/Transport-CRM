import { client } from "../db/db.js";

export const getDocsTypes = async () => {
  const { rows } = await client.query(
    "SELECT * FROM documents_types ORDER BY name ASC"
  );
  return rows;
};

export const postDocsTypes = async (name) => {
  const { rows } = await client.query(
    "INSERT INTO documents_types (name) VALUES ($1) RETURNING name",
    [name]
  );
  return rows[0];
};

export const putDocsTypes = async (id, name) => {
  const { rows } = await client.query(
    "SELECT name FROM documents_types WHERE id = $1",
    [id]
  );

  if (!rows[0]) throw new Error("Документ не знайдено");

  if (rows[0].name === name) {
    throw new Error("Таке ім'я вже існує!");
  }

  const { rows: updatedRows } = await client.query(
    "UPDATE documents_types SET name = $1 WHERE id = $2 RETURNING *",
    [name, id]
  );
  return updatedRows[0];
};
