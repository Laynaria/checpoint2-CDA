import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../entities/user.entity";
import * as UserService from "../services/user.service";
import * as AuthService from "../services/auth.service";

@Resolver(User)
export class UserResolver {
  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return UserService.findAll();
  }

  @Query(() => User)
  async getUserById(@Arg("id") id: number): Promise<User> {
    return UserService.findById(id);
  }

  @Mutation(() => User)
  async register(
    @Arg("email") email: string,
    @Arg("username") username: string,
    @Arg("password") password: string
  ): Promise<User> {
    return UserService.createUser(email, username, password);
  }

  @Mutation(() => String)
  async logIn(
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<String> {
    try {
      return await AuthService.signIn(email, password);
    } catch (e) {
      throw new Error("Invalid User");
    }
  }
}
