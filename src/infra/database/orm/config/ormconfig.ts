import { DataSource } from "typeorm"
import { RingDB } from "../entitie/ring-entitie"

export const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "ring_db",
    password: "ring_db",
    database: "ring_db",
    entities: [RingDB],
    logging: true,
    synchronize: true,
})