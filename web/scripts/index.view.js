
const containerRests = document.getElementById('container-restaurants');
const inputSearch = document.getElementById('input-search');
const buttonSearch = document.getElementById('button-search');

export function renderRestaurants(items) {
    let html = '';
    items.forEach(item => html += getRestaurantHTML(item));
    containerRests.innerHTML = html;
}

export const EventOnSearch = [];

function getRestaurantHTML(item) {
    return `
        <a href="" data-rest-id="${item['id']}" class="text-secondary restaurant">
            <div class="card mb-3">
                <img class="card-img-top" src="${item['image']}" alt="${item['name']}">
                    <div class="card-body p-3">
                        <h6 class="card-title mb-1">${item['name']}</h6>
                        <div class="restaurant-category mb-1">
                            <i class="fas fa-utensils pr-2"></i> ${item['category']}
                        </div>
                        <span class="badge rounded-pill bg-danger font-weight-normal">
                            ${item['rating']}
                            <i class="fas fa-star fa-xs"></i>
                        </span>
                    </div>
            </div>
        </a>
    `;
}

function setEventOnItemRestaurantClick() {
    containerRests.addEventListener('click', (event) => {
        event.preventDefault();
        const item = event.target.closest('.restaurant');
        if (item) {
            const id = item.getAttribute('data-rest-id');
            location.assign(`show.html?id=${id}`);
        }
    });
}

function setEventOnButtonSearchClick() {
    buttonSearch.addEventListener('click', (event) => {
        event.preventDefault();
        if (inputSearch.value) {
            EventOnSearch.forEach(func => func(inputSearch.value));
        }
    });
}

setEventOnItemRestaurantClick();
setEventOnButtonSearchClick();