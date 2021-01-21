import bodyParser from "body-parser";
import express from "express";

import connectDB from "../config/database";

import movie from "./routes/api/movie";
import tv from "./routes/api/tv";
import search from "./routes/api/search";

import mongo from '../config/mongo';

const app = express();

connectDB();

console.log(mongo);

app.set("port", process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (_req, res) => {
  res.send("API Running");
});

app.use("/api/movie", movie);
app.use("/api/tv", tv);
app.use("/api/search", search);

const port = app.get("port");

const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

export default server;
