import mongoose from "mongoose";

export interface Message extends mongoose.Document {
  senderId: string;
  text: string;
}

export interface Chat extends mongoose.Document {
  members: string[];
  messages: Message[];
}

const messageSchema = new mongoose.Schema<Message>(
  {
    senderId: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const chatSchema = new mongoose.Schema<Chat>(
  {
    members: {
      type: [String],
      required: true,
    },
    messages: {
      type: [messageSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const ChatModel = mongoose.model<Chat>("chats", chatSchema);

export default ChatModel;
