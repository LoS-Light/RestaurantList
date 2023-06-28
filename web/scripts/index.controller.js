
import { API_ROOT } from './const.js';
import * as view from './index.view.js';

const apiRoot = API_ROOT;

function showRestaurants(data) {
    view.setIsSpinnerLoadingActive(false);
    view.renderRestaurants(data);
}

async function fetchRestaurantsData(api) {
    try {
        view.clearRestaurants();
        view.setIsSpinnerLoadingActive(true);
        const data = (await axios.get(api)).data;
        showRestaurants(data);
    }
    catch (error) {
        console.log(error);
    }
}

function setEventSearchCallback() {
    view.EventOnSearch.push(async (keyword) => {
        fetchRestaurantsData(`${apiRoot}/restaurants/?keyword=${keyword}`);
    });
}

function loadRestaurants() {
    fetchRestaurantsData(`${apiRoot}/restaurants`);
}

setEventSearchCallback();
loadRestaurants();