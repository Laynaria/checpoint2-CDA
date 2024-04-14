import { User } from "../entities/user.entity";
import * as argon2 from "argon2";

export const findAll = (): Promise<User[]> => {
  return User.find();
};

export const findById = (id: number): Promise<User> => {
  return User.findOneByOrFail({
    id,
  });
};

export const getByEmail = (email: string): Promise<User> => {
  return User.findOneByOrFail({ email });
};

export const createUser = async (
  email: string,
  username: string,
  password: string
): Promise<User> => {
  const user = new User();
  user.email = email;
  user.username = username;
  user.password = await argon2.hash(password);

  return user.save();
};
