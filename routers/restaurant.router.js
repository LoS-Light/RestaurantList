import express from 'express';
import { MockDB } from '../repositories/mock-db.js';

export const RestaurantRouter = express.Router();
const mockDB = new MockDB();
const categories = ['中東料理', '日本料理', '義式餐廳', '美式', '酒吧', '咖啡'];

RestaurantRouter.get('/restaurants', (req, res) => {
    const keyword = req.query.keyword;
    if (keyword) {
        res.send(getRestaurantsByKeyword(keyword));
    }
    else {
        res.send(mockDB.getRestaurants());
    }
});

RestaurantRouter.get('/restaurant/:id', (req, res) => {
    const id = Number(req.params.id);
    res.send(mockDB.getRestaurantById(id));
});

function getRestaurantsByKeyword(keyword) {
    const isCategory = categories.includes(keyword);
    if (isCategory) {
        return mockDB.getRestaurantsByCategory(keyword);
    }
    else {
        return mockDB.getRestaurantsByName(keyword);
    }
}