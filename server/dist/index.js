"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const team_routes_1 = __importDefault(require("./routes/team.routes"));
const players_routes_1 = __importDefault(require("./routes/players.routes"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("holaaa");
});
app.use("/api", team_routes_1.default);
app.use("/api", players_routes_1.default);
app.post("/", (req, res) => {
    console.log(req.body);
    res.json(req.body);
});
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`); // localhost
});
//# sourceMappingURL=index.js.map