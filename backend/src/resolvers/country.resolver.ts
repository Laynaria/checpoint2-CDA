import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Country } from "../entities/country.entity";
import * as CountryService from "../services/country.service";

@Resolver(Country)
export class countryResolver {
  @Query(() => [Country])
  async getCountries(): Promise<Country[]> {
    return CountryService.findAll();
  }

  @Mutation(() => Country)
  async addCountry(
    @Arg("code") code: string,
    @Arg("name") name: string,
    @Arg("emoji") emoji: string
  ): Promise<Country> {
    return CountryService.createCountry(code, name, emoji);
  }
}
