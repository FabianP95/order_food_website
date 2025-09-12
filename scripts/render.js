
function renderAllDishes() {
    renderSalat();
    renderPizza();
    renderSideDish();
    renderPayment();
};

function renderAllPayment() {
    
    renderPrice();
    renderRespCartPrice();
    renderDialogCartPrice();  
};

function renderSalat() {
    let salad = document.getElementById('salads');
    for (let indexDishes = 0; indexDishes < dishes.length - 7; indexDishes++) {
        salad.innerHTML += getSalatsTemplate(indexDishes);
    };
};

function renderPizza() {
    let pizza = document.getElementById('pizza');
    for (let indexDishes = 3; indexDishes < dishes.length - 3; indexDishes++) {
        pizza.innerHTML += getPizzaTemplate(indexDishes);
    };
};

function renderSideDish() {
    let sideDish = document.getElementById('side_dish');
    for (let indexDishes = 7; indexDishes < dishes.length; indexDishes++) {
        sideDish.innerHTML += getSideDishTemplate(indexDishes);
    };
};

function renderPayment() {
    let contentRef = document.getElementById('show_payment');
    let contentRespRef = document.getElementById('show_payment_resp');
    contentRef.innerHTML = getPaymentOverview();
    contentRespRef.innerHTML = getPaymentOverview();
};

function renderPrice() {
    let totalSum = document.getElementById("total_sum");
    let priceDisplay = document.getElementById("show_price");
    priceDisplay.innerHTML = totalSum.innerHTML;
};

function renderRespCartPrice() {
    let totalSum = document.getElementById("total_sum");
    let priceDisplay = document.getElementById("show_price_resp_cart");
    priceDisplay.innerHTML = totalSum.innerHTML;
};

function renderDialogCartPrice() {
    let totalSum = document.getElementById("total_sum");
    let priceDisplay = document.getElementById("show_price_dialog_cart");
    priceDisplay.innerHTML = totalSum.innerHTML;
};

function renderRespCart() {
    let contentRef = document.getElementById('cart_content');
    let contentDestination = document.getElementById('resp_cart_content');
    let priceRef = document.getElementById('show_payment');
    let priceDestinationRef = document.getElementById('show_payment_resp');
    contentDestination.innerHTML = contentRef.innerHTML;
    priceDestinationRef.innerHTML = priceRef.innerHTML;
};

