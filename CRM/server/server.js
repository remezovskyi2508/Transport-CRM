import { getEnvVar } from "./utils/getEnvVar.js";
import express from "express";
import cors from "cors";
import pino from "pino-http";
import usersRouter from "./routers/users.js";
import documentsRouter from "./routers/documents.js";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = Number(getEnvVar("PORT", "3000"));

export const startServer = () => {
  app.use(
    pino({
      transport: {
        target: "pino-pretty",
      },
    })
  );

  app.use("/users", usersRouter);

  app.use("/documents", documentsRouter);

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
