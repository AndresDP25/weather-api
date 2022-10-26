import { MAPBOX_API_KEY } from "../config/config.js";
import axios from "axios";

export const findCitiesRep = async (city) => {
  const limit = 10;
  const pathBase = `https://api.mapbox.com/geocoding/v5/mapbox.places/`;
  const language = "es";
  const url = `${pathBase}${city}.json?limit=${limit}&proximity=ip&language=${language}&access_token=${MAPBOX_API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    throw err;
  }
};
