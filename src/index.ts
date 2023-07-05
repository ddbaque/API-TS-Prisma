import express from "express";

import teamRoutes from "./routes/team.routes";

const app = express();

const PORT = 3002;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("holaaa");
});

app.use("/api", teamRoutes);

app.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`); // localhost
});
