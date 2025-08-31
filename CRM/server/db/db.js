import { getEnvVar } from "../utils/getEnvVar.js";
import pkg from "pg";

const { Client } = pkg;

export const client = new Client({
  host: getEnvVar("DB_HOST"),
  port: Number(getEnvVar("DB_PORT", "5432")),
  user: getEnvVar("DB_USER", "postgres"),
  password: getEnvVar("DB_PASSWORD"),
  database: getEnvVar("DB_NAME", "crm"),
});

export const connectDB = async () => {
  try {
    await client.connect();
    console.log("Connected to PostgreSQL DB");
  } catch (err) {
    console.error("Error connecting PostgreSQL:", err.message);
    throw err;
  }
};
