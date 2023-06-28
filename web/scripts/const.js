const DEV_API = 'http://localhost:3000/v1';
const PROD_API = 'https://restaurantlist.loslight.com/v1';

function getApi() {
    const hostname = location.hostname;
    if (hostname === 'localhost') {
        console.log('-> Environment: Dev');
        return DEV_API;
    }
    else {
        console.log('-> Environment: Prod');
        return PROD_API;
    }
}

export const API_ROOT = getApi();