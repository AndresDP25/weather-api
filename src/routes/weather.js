import { Router } from "express";
import { weatherByCoord, weatherByCityId } from "../controllers/weather.js";

const router = Router();

router.get("/", weatherByCoord);
router.get("/:city/:id", weatherByCityId);

export default router;
