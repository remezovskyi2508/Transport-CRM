import * as docsTypeServices from "../services/documents_types.js";
import createError from "http-errors";

export const getDocsTypesController = async (req, res, next) => {
  try {
    const docs_types = await docsTypeServices.getDocsTypes();
    if (!docs_types) return;
    res.json({
      status: 200,
      message: "Successfully found documents types!",
      data: docs_types,
    });
  } catch (err) {
    next(err);
  }
};

export const addDocsTypesController = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) {
      throw createError(404, `Ім'я не було надано!`);
    }
    const data = await docsTypeServices.postDocsTypes(name);
    res.json({
      status: 200,
      message: "Successfully added documents types!",
      data: data,
    });
  } catch (err) {
    next(err);
  }
};

export const putDocsTypesController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      throw createError(404, `Ім'я не було надано!`);
    }

    const data = await docsTypeServices.putDocsTypes(id, name);
    res.json({
      status: 200,
      message: "Successfully put documents types!",
      data: data,
    });
  } catch (err) {
    next(err);
  }
};

export const deleteDocsTypesController = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
