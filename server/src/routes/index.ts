import { Router } from "express";

import teamRoutes from "./team.routes";
import playersRoutes from "./players.routes";

const router = Router();

router.use("/api", teamRoutes);
router.use("/api", playersRoutes);

export default router;
