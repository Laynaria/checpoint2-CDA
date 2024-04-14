import jwt from "jsonwebtoken";
import * as UserService from "./user.service";
import * as argon2 from "argon2";
import { User } from "../entities/user.entity";

/**
 *
 * @param email = user email
 * @param password = user password
 * @returns a token as string
 */
export const signIn = async (
  email: string,
  password: string
): Promise<string> => {
  try {
    const user: User = await UserService.getByEmail(email);

    if (await verifyPassword(password, user.password)) {
      const token = signJwt({
        id: user.id,
      });

      return token;
    } else {
      throw new Error();
    }
  } catch (e) {
    throw new Error("Invalid Authentification!");
  }
};

/**
 *
 * @param password user password from req
 * @param hashedPassword user password from database
 * @returns a boolean true or false
 */
export const verifyPassword = async (
  password: string,
  hashedPassword: string
) => {
  return await argon2.verify(hashedPassword, password);
};

/**
 *
 * @param payload = jwt payload
 * @returns a token as string
 */
export const signJwt = (payload: any): string => {
  if (process.env.JWT_SECRET_KEY === undefined) {
    throw new Error();
  }

  return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: 60 * 60 * 24 * 14,
  });
};
