import { weatherRep } from "../repositories/weatherRepository.js";
import { findCitiesRep } from "../repositories/cityRepository.js";

export const weatherService = async (lon, lat) => {
  const weather = await weatherRep(lon, lat);

  return {
    description: weather.weather[0].description,
    temperature: weather.main.temp,
    temperatureMax: weather.main.temp_max,
    temperatureMin: weather.main.temp_min,
  };
};

export const weatherServiceByCityId = async (city, id) => {
  const cities = await findCitiesRep(city);
  const cityInfo = cities.features.find((e) => e.id === id);
  const lon = cityInfo.geometry.coordinates[0];
  const lat = cityInfo.geometry.coordinates[1];
  return weatherService(lon, lat);
};
