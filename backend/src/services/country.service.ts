import { Country } from "../entities/country.entity";

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
