import "reflect-metadata"
import { app } from "./app";
import { myDataSource } from "./infra/database/orm/config/ormconfig";
const PORT = 3000
myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })


app.listen(PORT,()=> console.log(`Serving in running ${PORT}`))


// typeorm migration:create ./migrations/users
