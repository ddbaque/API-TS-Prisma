import express from "express";

import teamRoutes from "./routes/team.routes";
import playersRoutes from "./routes/players.routes";

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("holaaa");
});

app.use("/api", teamRoutes);
app.use("/api", playersRoutes);

app.post("/", (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`); // localhost
});
