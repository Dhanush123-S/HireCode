import dotenv from "dotenv";

dotenv.config({
  path: "./src/.env",
});

export const ENV = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
};
