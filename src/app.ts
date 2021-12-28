import express from "express";
import "express-async-errors";
import "./database";
import router from "./router";

const port = 3000;
const app = express();

app.use(express.json());

app.use(router);

app.listen(port);
