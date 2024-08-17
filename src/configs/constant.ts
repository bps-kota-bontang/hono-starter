export const APP_URL = Bun.env.APP_URL || "http://localhost:3000";
export const JWT_SECRET = Bun.env.JWT_SECRET || "password";
export const JWT_DURATION = parseInt(Bun.env.JWT_DURATION ?? "3600");
export const MONGO_URI = Bun.env.MONGO_URI;
export const NODE_ENV = Bun.env.NODE_ENV || "development";