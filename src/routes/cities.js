import { Router } from "express";
import { cities } from "../controllers/cities.js";

const router = Router();

router.get("/:city", cities);

export default router;
