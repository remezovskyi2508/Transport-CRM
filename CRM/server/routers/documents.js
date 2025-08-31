import { Router } from "express";
import {
  addDocumentsController,
  deleteDocumentByIdController,
  patchDocumentsController,
} from "../controllers/documents.js";

const documentsRouter = Router();

documentsRouter.post("/", addDocumentsController);

documentsRouter.patch("/:id", patchDocumentsController);

documentsRouter.delete("/:id", deleteDocumentByIdController);

export default documentsRouter;
