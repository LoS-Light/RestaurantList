
const containerRestaurant = document.getElementById('container-restaurant');
const titleRestaurant = document.getElementById('title-restaurant');

export function renderRestaurant(item) {
    titleRestaurant.innerHTML = item.name;
    containerRestaurant.innerHTML = getRestaurantHTML(item);
}

function getRestaurantHTML(item) {
    return `
        <div class="row">
            <div class="col-12 col-md-10 mx-auto">

                <p class="mb-1">
                    <span class="text-secondary">
                        <i class="fas fa-utensils pr-2"></i>
                        類別：
                    </span>
                    ${item.category}
                </p>

                <p class="mb-1">
                    <span class="text-secondary">
                        <i class="fas fa-map-marker-alt pr-2"></i>
                        地址：
                    </span>
                    ${item.location}
                    <a href="${item.google_map}" class="text-secondary" target="_blank">
                        <i class="fas fa-location-arrow pr-2 fa-xs"></i>
                    </a>
                </p>

                <p class="mb-1">
                    <span class="text-secondary">
                        <i class="fas fa-mobile-alt pr-2"></i>
                        電話：
                    </span>
                    ${item.phone}
                </p>

                <p class="mb-5">
                    ${item.description}
                </p>

                <img class="rounded mx-auto d-block mb-4 w-100" src="${item.image}" alt="${item.name}" style="max-width: 600px;">
            </div>
        </div>
    `;
}