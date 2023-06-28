import express from 'express';
import { RestaurantRouter } from './restaurant.router.js';

export const MainRouter = express.Router();

MainRouter.use(RestaurantRouter);
// Add more routers in the future