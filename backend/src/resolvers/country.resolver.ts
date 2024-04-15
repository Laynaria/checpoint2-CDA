import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Country } from "../entities/country.entity";
import * as CountryService from "../services/country.service";

@Resolver(Country)
export class countryResolver {
  /**
   *
   * @returns calls a function in CountryService which returns an Array of Country
   */
  @Query(() => [Country])
  async getCountries(): Promise<Country[]> {
    return CountryService.findAll();
  }

  /**
   *
   * @param continentCode string of country continent code used to find countries by continent code
   * @returns calls a function in CountryService which returns an array of country which have the continent code form Arg
   */
  @Query(() => [Country])
  async getCountriesByContinentCode(
    @Arg("continentCode") continentCode: string
  ): Promise<Country[]> {
    return CountryService.findByCountryCode(continentCode);
  }

  /**
   *
   * @param code string of country code used to find country by code
   * @returns calls a function in CountryService which returns a country or an error message if fail
   */
  @Query(() => Country)
  async getCountryByCode(@Arg("code") code: string): Promise<Country> {
    return CountryService.findByCode(code);
  }

  /**
   *
   * @param code string of country code
   * @param name string of country name
   * @param emoji string of country emoji
   * @returns calls a function in CountryService to create a Country in db which returns it
   */
  @Mutation(() => Country)
  async addCountry(
    @Arg("code") code: string,
    @Arg("name") name: string,
    @Arg("emoji") emoji: string,
    @Arg("continentCode") continentCode: string
  ): Promise<Country> {
    return CountryService.createCountry(code, name, emoji, continentCode);
  }
}
