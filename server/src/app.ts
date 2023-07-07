import express from "express";

import cors from "cors";
import morgan from "morgan";

import routes from "./routes/index";

const app = express();

//--------- Middlewares -----------
// enable cors to all hosts
app.use(
    cors({
        origin: "*",
        methods: "GET, POST, PUT, DELETE",
    })
);

// see type of petitions in dev mode
app.use(morgan("dev"));

// allow to recieve data in json format
app.use(express.json());

//----------- Routes --------------
/*
    routes -> /api/team
    routes -> /api/players
 */
app.use(routes);

export default app;
