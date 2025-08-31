import { client } from "../db/db.js";
import * as documentsServices from "../services/documents.js";
import createError from "http-errors";

export const addDocumentsController = async (req, res, next) => {
  try {
    const { doc_name, doc_number, doc_title, doc_expiry, file_path } = req.body;
    const docsData = await documentsServices.addDocument(
      doc_name,
      doc_number,
      doc_title,
      doc_expiry,
      file_path
    );

    if (!docsData) {
      throw createError(404, "Data is not full");
    }

    res.json({
      status: 200,
      message: "Successfully Added Documents!",
      data: docsData,
    });
  } catch (err) {
    next(err);
  }
};

export const patchDocumentsController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = { ...req.body };
    const updateData = await documentsServices.updateDocumentById(id, data);
    res.json({
      status: 200,
      message: "Successfully patched document",
      data: updateData,
    });
  } catch (err) {
    next(err);
  }
};

export const deleteDocumentByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw createError(404, `Document Id is required!`);
    }
    const document = await documentsServices.deleteDocumentById(id);

    if (!document) {
      throw createError(404, `Document with id = ${id} not found!`);
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
