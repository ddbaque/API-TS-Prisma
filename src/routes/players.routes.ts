import { Router } from "express";

import prisma from "../db";

const router = Router();

router.get('/', (req, res) => {
    res.send("playeeers")
})

export default router;