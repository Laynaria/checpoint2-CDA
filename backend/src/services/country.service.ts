import { Country } from "../entities/country.entity";

/**
 *
 * @returns An array of countries
 */
export const findAll = (): Promise<Country[]> => {
  return Country.find();
};

/**
 *
 * @param code string of country code used to find country by code
 * @returns a country or an error message if fail
 */
export const findByCode = (code: string): Promise<Country> => {
  return Country.findOneByOrFail({ code });
};

/**
 *
 * @param code string of country code
 * @param name string of country name
 * @param emoji string of country emoji
 * @returns save a country in database and returns it
 */
export const createCountry = async (
  code: string,
  name: string,
  emoji: string
): Promise<Country> => {
  const country = new Country();
  country.code = code;
  country.name = name;
  country.emoji = emoji;

  return country.save();
};
