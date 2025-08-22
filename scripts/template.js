function getSalatsTemplate(indexSalad) {
    return ` <section class="dish_overview">
                <div>
                    <h3 class="dish_name">${dishes[indexSalad].name}</h3>
                    <p class="dish_info">${dishes[indexSalad].topping}<br><br><span
                            class="color">${dishes[indexSalad].price+ "€"}</span>
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
                    <p class="dish_info">${dishes[indexPizza].topping}<br><br><span
                            class="color">${dishes[indexPizza].price+ "€"}</span>
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
                    <p class="dish_info color">${dishes[indexSideDish].price+ "€"}
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