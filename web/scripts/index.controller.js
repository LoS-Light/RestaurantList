
import * as view from './index.view.js';

const apiRoot = `http://localhost:3000/v1`;

function showAllRestaurants(data) {
    view.renderRestaurants(data);
}

async function loadRestaurants() {
    try {
        const data = (await axios.get(`${apiRoot}/restaurants`)).data;
        showAllRestaurants(data);
    }
    catch (error) {
        console.log(error);
    }
}

function registerEventSearchCallback() {
    view.EventOnSearch.push(async (keyword) => {
        try {
            const data = (await axios.get(`${apiRoot}/restaurants/?keyword=${keyword}`)).data;
            showAllRestaurants(data);
        }
        catch (error) {
            console.log(error);
        }
    });
}

registerEventSearchCallback();
loadRestaurants();