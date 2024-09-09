import db from "../models";

// Get all Province
export const getProvincesService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Province.findAll({
        raw: true,
        attributes: ["code", "value"],
      });
      resolve({
        err: response ? 0 : 1,
        mes: response ? "OK" : "Failed to get provinces.",
        response,
      });
    } catch (err) {
      reject(err);
    }
  });
