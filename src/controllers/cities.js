import bcrypt from "bcryptjs";
import { Success } from "../handlers/successHandler.js";
import { findCities } from "../services/cityService.js";
import { AppError } from "../errors/appError.js";

export const cities = async (req, res, next) => {
  try {
    const { city } = req.params;
    res.json(new Success(await findCities(city)));
  } catch (err) {
    next(err);
  }
};
