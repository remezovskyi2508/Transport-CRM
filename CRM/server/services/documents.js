import { client } from "../db/db.js";

export const addDocument = async (
  doc_name,
  doc_number,
  doc_title,
  doc_expiry,
  file_path
) => {
  const { rows } = await client.query(
    "INSERT INTO documents (doc_name, doc_number, doc_title, doc_expiry, file_path) VALUES ($1, $2, $3, $4, $5) RETURNING id, user_id, type_id, doc_name, doc_number, doc_title, doc_expiry, file_path, created_at, updated_at, is_current;",
    [doc_name, doc_number, doc_title, doc_expiry, file_path]
  );
  return rows[0];
};

export const updateDocumentById = async (id, data) => {
  const keys = Object.keys(data);
  const values = Object.values(data);

  if (keys === 0) return null;
  const setKey = keys
    .map((key, index) => `"${key}" = $${index + 2}`)
    .join(", ");

  const query = `UPDATE documents SET ${setKey}, updated_at = now() WHERE id = $1 RETURNING *;`;

  const { rows } = await client.query(query, [id, ...values]);
  return rows[0];
};

export const deleteDocumentById = async (id) => {
  const { rows } = await client.query(
    "DELETE FROM documents WHERE id = $1 RETURNING *;",
    [id]
  );
  return rows[0];
};
