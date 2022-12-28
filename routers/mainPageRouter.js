import { Router } from "express";
import { getPage } from "../controller/mainPageController.js";

const mainRouter = Router();


mainRouter.get('/main', getPage);

export {mainRouter};