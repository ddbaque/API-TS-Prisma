"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const team_controllers_1 = require("../controllers/team.controllers");
const router = (0, express_1.Router)();
router.get("/team", team_controllers_1.getAllTeams);
router.get("/team/:id", team_controllers_1.getTeamById);
router.post("/team", team_controllers_1.createTeam);
router.put("/team/:id", team_controllers_1.updateTeamById);
router.delete("/team/:id", team_controllers_1.deleteTeamById);
exports.default = router;
//# sourceMappingURL=team.routes.js.map