import { Router } from "express";
import { getMarkers } from "../controller/markerController.js";

const markerRouter = Router();


markerRouter.get('/markers', getMarkers);

export {markerRouter};