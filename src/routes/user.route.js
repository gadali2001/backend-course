import * as User from "../modules/user.model.js";
import { Router } from "express";

const router = Router();
router.post("/create-user", User.createUser);


export default router;