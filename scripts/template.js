function renderSalat() {
    let contentRef = document.getElementById('salads');
    for (let indexDishes = 0; indexDishes < dishes.length - 7; indexDishes++) {
        contentRef.innerHTML += getSalatsTemplate(indexDishes);
    }
}

function renderPizza() {
    let contentRef = document.getElementById('pizza');
    for (let indexDishes = 3; indexDishes < dishes.length - 3; indexDishes++) {
        contentRef.innerHTML += getPizzaTemplate(indexDishes);
    }
}

function renderSideDish() {
    let contentRef = document.getElementById('side_dish');
    for (let indexDishes = 7; indexDishes < dishes.length; indexDishes++) {
        contentRef.innerHTML += getSideDishTemplate(indexDishes);
    }
}



function getSalatsTemplate(indexDishes) {
    return ` <section class="dish_overview">
                <div>
                    <h3 class="dish_name">${dishes[indexDishes].name}</h3>
                    <p class="dish_info text_color">${dishes[indexDishes].topping}<br><br><span
                            class="color">${dishes[indexDishes].price + "€"}</span>
                    </p>
                </div>
                <div class="dish_overview_right_side">
                    <img class="dish_image" src="${dishes[indexDishes].source}" alt="${dishes[indexDishes].alt}">
                    <button onclick="addToCart(${indexDishes})" class="dish_overview_btn">
                        <img class="icon" src="./assets/icons/order_icons/plus.svg" alt="add dish to cart">
                    </button>
                </div>
            </section>`
}

function getPizzaTemplate(indexDishes) {
    return `<section class="dish_overview">
                <div>
                    <h3 class="dish_name">${dishes[indexDishes].name}</h3>
                    <p class="dish_info text_color">${dishes[indexDishes].topping}<br><br><span
                            class="color">${dishes[indexDishes].price + "€"}</span>
                    </p>
                </div>
                <div class="dish_overview_right_side">
                    <img class="dish_image" src="${dishes[indexDishes].source}" alt="${dishes[indexDishes].alt}">
                    <button onclick="addToCart(${indexDishes})" class="dish_overview_btn">
                        <img class="icon" src="./assets/icons/order_icons/plus.svg" alt="add dish to cart">
                    </button>
                </div>
            </section>`
}


function getSideDishTemplate(indexDishes) {
    return `<section class="dish_overview">
                <div>
                    <h3 class="dish_name">${dishes[indexDishes].name}</h3>
                    <p class="dish_info color">${dishes[indexDishes].price + "€"}
                    </p>
                </div>
                <div class="dish_overview_right_side">
                    <img class="dish_image" src="${dishes[indexDishes].source}" alt="${dishes[indexDishes].alt}">
                    <button onclick="addToCart(${indexDishes})" class="dish_overview_btn">
                        <img class="icon" src="./assets/icons/order_icons/plus.svg" alt="add dish to cart">
                    </button>
                </div>
            </section>`
            
            
}

function getDishtoCart(indexDishes) {
    return `<section class="cart_section">
                    <h3>${dishes[indexDishes].name}</h3>
                    <div class="cart_order">
                        <button class="cart_btn">
                            <img class="cart_icon" src="./assets/icons/order_icons/minus.svg" alt="add dish to cart">
                        </button>
                        <p class="text_color">1x</p>
                        <button class="cart_btn">
                            <img class="cart_icon" src="./assets/icons/order_icons/plus.svg" alt="add dish to cart">
                        </button>
                        <p class="text_color">${dishes[indexDishes].price + "€"}</p>
                        <button class="cart_btn">
                            <img class="cart_icon" src="./assets/icons/order_icons/bin.svg" alt="add dish to cart">
                        </button>
                    </div>
                </section>`
}