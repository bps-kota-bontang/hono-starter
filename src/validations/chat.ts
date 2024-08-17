import { z } from "zod";

export const SendMessageSchema = z.object({
  text: z.string().min(1),
});

export type SendMessagePayload = z.infer<typeof SendMessageSchema>;
