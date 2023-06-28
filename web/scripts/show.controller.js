
import * as view from './show.view.js';

const apiRoot = `http://localhost:3000/v1`;

function showRestaurant(data) {
    view.renderRestaurant(data);
}

async function loadRestaurant() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (!id) {
        location.replace('index.html');
        return;
    }

    try {
        const data = (await axios.get(`${apiRoot}/restaurant/${id}`)).data;
        showRestaurant(data);
    }
    catch (error) {
        console.log(error);
    }
}

loadRestaurant();