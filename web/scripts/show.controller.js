
import { API_ROOT } from './const.js';
import * as view from './show.view.js';

const apiRoot = API_ROOT;

function showRestaurant(data) {
    view.renderRestaurant(data);
}

function backToIndex() {
    location.replace('index.html');
}

async function loadRestaurant() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (!id) return backToIndex();

    try {
        const data = (await axios.get(`${apiRoot}/restaurant/${id}`)).data;
        if (!data) return backToIndex();
        showRestaurant(data);
    }
    catch (error) {
        console.log(error);
    }
}

loadRestaurant();