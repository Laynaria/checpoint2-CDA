import { Country } from "../entities/country.entity";

export const findAll = (): Promise<Country[]> => {
  return Country.find();
};

export const findByCode = (code: string): Promise<Country> => {
  return Country.findOneByOrFail({ code });
};

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
