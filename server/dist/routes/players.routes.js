"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const players_controllers_1 = require("../controllers/players.controllers");
const router = (0, express_1.Router)();
router.get("/players", players_controllers_1.getAllPlayers);
router.get("/players/:id", players_controllers_1.getPlayerById);
router.post("/players", players_controllers_1.createPlayer);
router.put("/players/:id", players_controllers_1.updatePlayerById);
exports.default = router;
//# sourceMappingURL=players.routes.js.map