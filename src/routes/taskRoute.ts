import Router from "express";
import {getAllTaskController} from "../controllers/taskCotroller";

const router = Router();

router.get('/', getAllTaskController);

export default router;