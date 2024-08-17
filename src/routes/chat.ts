import { sendMessage } from "@/services/chat";
import { JWT } from "@/types/jwt";
import { SendMessagePayload, SendMessageSchema } from "@/validations/chat";
import { Hono } from "hono";

const app = new Hono();

app.post("/:id/message", async (c) => {
  const claims = c.get("jwtPayload") as JWT;
  const chatId = c.req.param("id");
  const payload = await c.req.json<SendMessagePayload>();
  const parsed = SendMessageSchema.safeParse(payload);

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

  const result = await sendMessage(chatId, claims.sub, parsed.data.text);

  return c.json(
    {
      data: result.data,
      message: result.message,
    },
    result.code
  );
});

export default app;
