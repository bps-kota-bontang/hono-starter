import { login } from "@/services/auth";
import { LoginPayload, LoginSchema } from "@/validations/auth";
import { Hono } from "hono";

const app = new Hono();

app.post("/login", async (c) => {
  const payload = await c.req.json<LoginPayload>();
  const parsed = LoginSchema.safeParse(payload);

  if (!parsed.success) {
    return c.json(
      {
        data: null,
        message: "Invalid payload",
        errors: parsed.error.issues,
      },
      400
    );
  }

  const result = await login(parsed.data.email, parsed.data.password);

  return c.json(
    {
      data: result.data,
      message: result.message,
    },
    result.code
  );
});

export default app;
