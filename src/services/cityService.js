import { findCitiesRep } from "../repositories/cityRepository.js";

export const findCities = async (city) => {
  const cities = await findCitiesRep(city);

  return cities.features.map((e) => {
    return {
      id: e.id,
      name: e.place_name,
      log: e.geometry.coordinates[0],
      lat: e.geometry.coordinates[1],
    };
  });
};
