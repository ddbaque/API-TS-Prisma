import { Router } from "express";

import prisma from "../db";

import {
  createTeam,
  deleteTeamById,
  getAllTeams,
  getTeamById,
  updateTeamById,
} from "../controllers/team.controllers";

const router = Router();

router.get("/team", getAllTeams);

router.get("/team/:id", getTeamById);

router.post("/team", createTeam);

router.put("/team/:id", updateTeamById);

router.delete("/team/:id", deleteTeamById);

export default router;
