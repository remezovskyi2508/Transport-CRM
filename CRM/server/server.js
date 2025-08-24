import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";
import pino from "pino-http";
import pkg from "pg";

const { Client } = pkg;
const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;

export const startServer = () => {
  app.use(
    pino({
      transport: {
        target: "pino-pretty",
      },
    })
  );

  app.get("/", (req, res) => {
    res.send("Get request");
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: "Something went wrong",
      error: err.message,
    });
  });

  app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
  });

  //Run server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
