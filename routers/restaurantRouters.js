import { Router } from "express";
import { getRestaurant } from "../controller/restaurantController.js";


const restaurantRouter = Router();


restaurantRouter.get('/restaurant', getRestaurant);

export {restaurantRouter};