import { readFileSync } from "fs";

export class MockDB {
    constructor() {
        try {
            const db = readFileSync('./models/restaurant.json', 'utf8');
            this.results = JSON.parse(db).results;
            console.log('-> Mock db is ready');
        }
        catch (err) {
            console.log(err);
        }
    }

    getRestaurants() {
        return this.results;
    }

    getRestaurantById(id) {
        return this.results.find((item) => item.id === id) ?? {};
    }

    getRestaurantsByName(name) {
        return this.results.filter((item) => item.name.toLowerCase().includes(name)) ?? [];
    }

    getRestaurantsByCategory(category) {
        return this.results.filter((item) => item.category === category) ?? [];
    }
}