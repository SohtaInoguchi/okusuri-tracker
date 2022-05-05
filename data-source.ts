import "reflect-metadata"
import { DataSource } from 'typeorm';
import { Prescription } from "./entities/Prescription";
import { Users } from "./entities/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    username: "Sohta063019",
    database: "prescription",
    entities: [Prescription, Users],
    synchronize: true
})
