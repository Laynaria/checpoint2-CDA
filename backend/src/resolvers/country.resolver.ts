import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Country } from "../entities/country.entity";
import * as CountryService from "../services/country.service";

@Resolver(Country)
export class countryResolver {}
