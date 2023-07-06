import { Router } from "express";

import prisma from "../db";

import {
    createPlayer,
    deletePlayerById,
    getAllPlayers,
    getPlayerById,
    updatePlayerById,
} from "../controllers/players.controllers";

const router = Router();

router.get("/players", getAllPlayers);

router.get("/players/:id", getPlayerById);

router.post("/players", createPlayer);

router.put("/players/:id", updatePlayerById);

export default router;
