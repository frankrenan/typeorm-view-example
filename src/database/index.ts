import "reflect-metadata";
import { createConnection } from "typeorm";


createConnection({
  type: "mysql",
  username: "root",
  password: "root",
  database: "typeorm",
  entities: [__dirname + "/entities/*.ts"],
});

// createConnection().catch((err) => console.error(err));
