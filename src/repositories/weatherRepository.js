import { OPENWEATHERMAP_API_KEY } from "../config/config.js";
import axios from "axios";

export const weatherRep = async (lon, lat) => {
  const units = "metric";
  const pathBase = `https://api.openweathermap.org/data/2.5/weather`;
  const language = "es";
  const url = `${pathBase}?lat=${lat}&lon=${lon}&units=${units}&lang=${language}&appid=${OPENWEATHERMAP_API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    throw err;
  }
};
