import { DataSource } from "typeorm"
import { Ring } from "../entitie/ring"

export const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "ring_db",
    password: "ring_db",
    database: "ring_db",
    entities: [Ring],
    logging: true,
    synchronize: true,
})