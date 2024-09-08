import db from "../models";

// Get all Category
export const getCatogoriesService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.findAll({ raw: true });
      resolve({
        err: response ? 0 : 1,
        mes: response ? "OK" : "Failed to get category.",
        response,
      });
    } catch (err) {
      reject(err);
    }
  });
