import { config as dotenv } from "dotenv";
dotenv();

export const config ={
  host: process.env.DB_HOST || "localhost",
  user:process.env.DB_USER || "root",
  password:process.env.DB_PASSWORD || "password",
  database:process.env.DB_DATABASE || "database",
}

// en caso de no existir se puede user || como un if para q pruebe con algo standar