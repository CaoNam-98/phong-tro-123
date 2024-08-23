import db from "../models";

// Get all Category
export const getAreasService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Area.findAll({
        raw: true,
        attributes: ["code", "value", "order"],
      });
      resolve({
        err: response ? 0 : 1,
        mes: response ? "OK" : "Failed to get prices.",
        response,
      });
    } catch (err) {
      reject(err);
    }
  });
