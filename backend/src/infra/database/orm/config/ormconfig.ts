import { DataSource } from "typeorm"
import { RingEntity } from "../entitie/ring-entitie"

export const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "ring_db",
    password: "ring_db",
    database: "ring_db",
    entities: [RingEntity],
    logging: false,
    synchronize: true,
})