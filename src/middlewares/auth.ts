import { jwt } from "hono/jwt";
import { createMiddleware } from "hono/factory";
import { JWT_SECRET } from "@/configs/constant";

export const auth = createMiddleware(async (c, next) => {
  const jwtMiddleware = jwt({
    secret: JWT_SECRET,
  });

  return jwtMiddleware(c, next);
});
