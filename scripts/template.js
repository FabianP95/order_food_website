function renderSalat() {
    let contentRef = document.getElementById('salads');
    for (let indexSalad = 0; indexSalad < dishes.length - 7; indexSalad++) {
        contentRef.innerHTML += getSalatsTemplate(indexSalad);
    }
}

function renderPizza() {
    let contentRef = document.getElementById('pizza');
    for (let indexPizza = 3; indexPizza < dishes.length - 3; indexPizza++) {
        contentRef.innerHTML += getPizzaTemplate(indexPizza);
    }
}

function renderSideDish() {
    let contentRef = document.getElementById('side_dish');
    for (let indexSideDish = 7; indexSideDish < dishes.length; indexSideDish++) {
        contentRef.innerHTML += getSideDishTemplate(indexSideDish);
    }
}

function renderCart() {
    let contentRef = document.getElementById('cart');
}

function getSalatsTemplate(indexSalad) {
    return ` <section class="dish_overview">
                <div>
                    <h3 class="dish_name">${dishes[indexSalad].name}</h3>
                    <p class="dish_info text_color">${dishes[indexSalad].topping}<br><br><span
                            class="color">${dishes[indexSalad].price + "€"}</span>
                    </p>
                </div>
                <div class="dish_overview_right_side">
                    <img class="dish_image" src="${dishes[indexSalad].source}" alt="${dishes[indexSalad].alt}">
                    <button class="dish_overview_btn">
                        <img class="icon" src="./assets/icons/order_icons/plus.svg" alt="add dish to cart">
                    </button>
                </div>
            </section>`
}

function getPizzaTemplate(indexPizza) {
    return `<section class="dish_overview">
                <div>
                    <h3 class="dish_name">${dishes[indexPizza].name}</h3>
                    <p class="dish_info text_color">${dishes[indexPizza].topping}<br><br><span
                            class="color">${dishes[indexPizza].price + "€"}</span>
                    </p>
                </div>
                <div class="dish_overview_right_side">
                    <img class="dish_image" src="${dishes[indexPizza].source}" alt="${dishes[indexPizza].alt}">
                    <button class="dish_overview_btn">
                        <img class="icon" src="./assets/icons/order_icons/plus.svg" alt="add dish to cart">
                    </button>
                </div>
            </section>`
}

function getSideDishTemplate(indexSideDish) {
    return `<section class="dish_overview">
                <div>
                    <h3 class="dish_name">${dishes[indexSideDish].name}</h3>
                    <p class="dish_info color">${dishes[indexSideDish].price + "€"}
                    </p>
                </div>
                <div class="dish_overview_right_side">
                    <img class="dish_image" src="${dishes[indexSideDish].source}" alt="${dishes[indexSideDish].alt}">
                    <button class="dish_overview_btn">
                        <img class="icon" src="./assets/icons/order_icons/plus.svg" alt="add dish to cart">
                    </button>
                </div>
            </section>`
}

function getDishtoCart() {
    return `<h3>Pollo Pollo</h3>
                    <div class="cart_order">
                        <button class="cart_btn">
                            <img class="cart_icon" src="./assets/icons/order_icons/minus.svg" alt="add dish to cart">
                        </button>
                        <p class="text_color">3x</p>
                        <button class="cart_btn">
                            <img class="cart_icon" src="./assets/icons/order_icons/plus.svg" alt="add dish to cart">
                        </button>
                        <p class="text_color">25,50€</p>
                        <button class="cart_btn">
                            <img class="cart_icon" src="./assets/icons/order_icons/bin.svg" alt="add dish to cart">
                        </button>
                    </div>`
}