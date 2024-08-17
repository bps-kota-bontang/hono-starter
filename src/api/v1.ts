import { Hono } from "hono";

import auth from "@/routes/auth";
import chats from "@/routes/chat";
import users from "@/routes/user";

const app = new Hono();

app.route("/auth", auth);
app.route("/chats", chats);
app.route("/users", users);


export default app;
