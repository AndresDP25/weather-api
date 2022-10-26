import bcrypt from "bcryptjs";
import { Success } from "../handlers/successHandler.js";
import { findCities } from "../services/cityService.js";

export const cities = async (req, res) => {
  const { city } = req.params;
  res.json(new Success(await findCities(city)));
};
