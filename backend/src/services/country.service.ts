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
 * @param continentCode string of country continent code used to find countries by continent code
 * @returns an array of countries which all have the continent code from param
 */
export const findByCountryCode = (
  continentCode: string
): Promise<Country[]> => {
  return Country.find({
    where: {
      continentCode: continentCode,
    },
  });
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
  emoji: string,
  continent: string
): Promise<Country> => {
  const country = new Country();
  country.code = code;
  country.name = name;
  country.emoji = emoji;
  country.continentCode = continent;

  return country.save();
};
