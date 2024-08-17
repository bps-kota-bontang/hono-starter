import { APP_URL, JWT_DURATION, JWT_SECRET } from "@/configs/constant";
import { User } from "@/prisma/generated";
import { JWT } from "@/types/jwt";
import { sign } from "hono/jwt";

export const generateToken = async (user: User): Promise<string> => {
  const payload = generatePayload(user);

  const token = await sign(payload, JWT_SECRET);

  return token;
};

export const generatePayload = (user: User) => {
  const now = Math.floor(Date.now() / 1000);

  const payload: JWT = {
    iss: APP_URL,
    sub: user.id,
    exp: now + JWT_DURATION,
    nbf: now,
    iat: now,
    name: user.name,
    email: user.email,
  };

  return payload;
};
