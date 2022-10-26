import bcrypt from "bcryptjs";
import { Success } from "../handlers/successHandler.js";
import {
  weatherService,
  weatherServiceByCityId,
} from "../services/weatherService.js";

export const weatherByCoord = async (req, res, next) => {
  try {
    const { lon, lat } = req.query;
    res.json(new Success(await weatherService(lon, lat)));
  } catch (err) {
    next(err);
  }
};

export const weatherByCityId = async (req, res, next) => {
  try {
    const { city, id } = req.params;
    res.json(new Success(await weatherServiceByCityId(city, id)));
  } catch (err) {
    next(err);
  }
};
