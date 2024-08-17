import { Result } from "@/types/result";
import Chat from "@/models/chat";

export const sendMessage = async (
  chatId: string,
  senderId: string,
  text: string
): Promise<Result<any>> => {
  await Chat.findOneAndUpdate(
    {
      id: chatId,
    },
    {
      $push: {
        messages: {
          senderId: senderId,
          text: text,
        },
      },
    },
    { new: true }
  );

  return {
    data: null,
    message: "successfully sent message",
    code: 200,
  };
};
