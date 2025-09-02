import { Router } from "express";
import {
  addDocsTypesController,
  deleteDocsTypesController,
  getDocsTypesController,
  putDocsTypesController,
} from "../controllers/documents_types.js";

const docs_typesRouter = Router();

docs_typesRouter.get("/", getDocsTypesController);

docs_typesRouter.post("/", addDocsTypesController);

docs_typesRouter.put("/:id", putDocsTypesController);

docs_typesRouter.delete("/:id", deleteDocsTypesController);

export default docs_typesRouter;
