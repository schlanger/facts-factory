import { AppDataSource } from "../data-source";
import { Fact } from "../entities/Fact";

export const factRepository = AppDataSource.getRepository(Fact)