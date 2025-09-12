function getSalatsTemplate(indexDishes) {
    return ` <section class="dish_overview">
                <div>
                    <h3 class="dish_name">${dishes[indexDishes].name}</h3>
                    <p class="dish_info text_color">${dishes[indexDishes].topping}<br><br><span
                            class="color">${dishes[indexDishes].price.toFixed(2).replace(".", ",") + "€"}</span>
                    </p>
                </div>
                <div class="dish_overview_right_side">
                    <img class="dish_image" src="${dishes[indexDishes].source}" alt="${dishes[indexDishes].alt}">
                    <button onclick="addToCart(${indexDishes})" class="dish_overview_btn">
                        <img class="icon" src="./assets/icons/order_icons/plus.svg" alt="add dish to cart">
                    </button>
                </div>
            </section>`
};

function getPizzaTemplate(indexDishes) {
    return `<section class="dish_overview">
                <div>
                    <h3 class="dish_name">${dishes[indexDishes].name}</h3>
                    <p class="dish_info text_color">${dishes[indexDishes].topping}<br><br><span
                            class="color">${dishes[indexDishes].price.toFixed(2).replace(".", ",") + "€"}</span>
                    </p>
                </div>
                <div class="dish_overview_right_side">
                    <img class="dish_image" src="${dishes[indexDishes].source}" alt="${dishes[indexDishes].alt}">
                    <button onclick="addToCart(${indexDishes})" class="dish_overview_btn">
                        <img class="icon" src="./assets/icons/order_icons/plus.svg" alt="add dish to cart">
                    </button>
                </div>
            </section>`
};

function getSideDishTemplate(indexDishes) {
    return `<section class="dish_overview">
                <div>
                    <h3 class="dish_name">${dishes[indexDishes].name}</h3>
                    <p class="dish_info color">${dishes[indexDishes].price.toFixed(2).replace(".", ",") + "€"}
                    </p>
                </div>
                <div class="dish_overview_right_side">
                    <img class="dish_image" src="${dishes[indexDishes].source}" alt="${dishes[indexDishes].alt}">
                    <button onclick="addToCart(${indexDishes})" class="dish_overview_btn">
                        <img class="icon" src="./assets/icons/order_icons/plus.svg" alt="add dish to cart">
                    </button>
                </div>
            </section>`
};

function getDishtoCart(indexDishes) {
    return `<section id="${indexDishes}" class="cart_section">
                <h3>${dishes[indexDishes].name}</h3>
                    <div class="cart_order">
                        <button onclick="decreaseAmount(${indexDishes})" class="cart_btn">
                            <img class="cart_icon" src="./assets/icons/order_icons/minus.svg" alt="decrase amount of dish from cart">
                        </button>
                        <p id="${indexDishes + "amount"}" class="text_color">1x</p>
                        <button onclick="increaseAmount(${indexDishes})" class="cart_btn">
                            <img class="cart_icon" src="./assets/icons/order_icons/plus.svg" alt="increase amount of dish from cart">
                        </button>
                        <p id="${indexDishes + "price"}" class="text_color">${dishes[indexDishes].price.toFixed(2).replace(".", ",") + "€"}</p>
                        <button onclick="deleteItem(${indexDishes})" class="cart_btn">
                            <img class="cart_icon" src="./assets/icons/order_icons/bin.svg" alt="delete dish from cart">
                        </button>
                    </div>
            </section>`
};

function getPaymentOverview(indexDishes) {
    return `<p class="text_color">Zwischensumme: <span id="subtotal" class="text_color"></span></p>
            <p class="text_color">Lieferkosten*: <span id="delivery_costs" class="text_color">5€</span> <br>
                        <span class="small">*bei über 30€ Bestellwert ent-<br>fallen die Lieferkosten</span>
            </p>
            <p class="size">Gesamt: <span id="total_sum"></span></p>
            <button id="order" class="order_Btn" onclick="emptyCart(${indexDishes})">Bestellen</button>`
};

