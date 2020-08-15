import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/user";

// createConnection({
//   type: "postgres",
//   host: "localhost",
//   port: 5432,
//   username: "postgres",
//   password: "postgres",
//   database: "shop",
//   entities: [User],
//   synchronize: true,
//   logging: true,
// })
//   .then((connection) => {
//     // here you can start to work with your entities
//   })
//   .catch((error) => console.log(error));

const getConnection = async () => {
  return await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "shop",
    // entities: [User],
    entities: [__dirname + "/entity/*.js"],
    synchronize: true,
    logging: true,
  });
};

export default getConnection;
