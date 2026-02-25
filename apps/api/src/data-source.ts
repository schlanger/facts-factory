import "reflect-metadata"
import { DataSource } from "typeorm"
import { Fact } from "./entities/Fact"

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DB_URL!,
    synchronize: true,
    logging: false,
    entities: [Fact],
    migrations: ["src/migrations/**/*.ts"],
    subscribers: [],
})
