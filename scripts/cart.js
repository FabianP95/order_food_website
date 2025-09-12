let prices = [];

const cartContent = document.getElementById('cart_content');

function addToCart(indexDishes) {
    let orderItem = document.getElementById((indexDishes));
    if (cartContent.contains(orderItem) === true) {
        increaseAmount(indexDishes);
        return
    }
    else {
        cartContent.innerHTML += getDishtoCart(indexDishes);
        let price = dishes[indexDishes].price;
        prices.push(price);
        calculateSubTotal();
    };
    toggleEffect();
    renderRespCart();
};

function decreaseAmount(indexDishes) {
    let amount = parseInt(document.getElementById((indexDishes) + "amount").innerHTML, 10);
    let price = dishes[indexDishes].price;
    amount--;
    singleCalculation(price, amount, indexDishes);
    document.getElementById((indexDishes) + "amount").innerHTML = amount + "x";
    if (amount <= 0) {
        prices.splice(prices.indexOf(price), 1);
        deleteItem(indexDishes);
        calculateSubTotal();
    } else {
        prices.splice(prices.indexOf(price), 1);
        calculateSubTotal();
    }
}

function increaseAmount(indexDishes) {
    let amount = parseInt(document.getElementById((indexDishes) + "amount").innerHTML, 10);
    let price = dishes[indexDishes].price;
    amount++;
    singleCalculation(price, amount, indexDishes);
    document.getElementById((indexDishes) + "amount").innerHTML = amount + "x";
    if (amount >= 21) {
        document.getElementById((indexDishes) + "amount").innerHTML = 20 + "x";
        return
    } else {
        prices.push(price);
        calculateSubTotal();
    }
    renderRespCart();
};

function deleteItem(indexDishes) {
    document.getElementById('delivery_costs').innerText = "5€";
    let contentRef = document.getElementById(indexDishes);
    let price = dishes[indexDishes].price;
    let pricesRemove = prices.reduce((ind, el, i) => {
        if (el === price) ind.push(i);
        return ind;
    }, []);
    for (var i = pricesRemove.length - 1; i >= 0; i--) {
        prices.splice(pricesRemove[i], 1)
    };
    calculateSubTotal();
    contentRef.remove();
    renderRespCart();
    console.log(prices);
}; 

function calculateSubTotal() {
    let subtotal = document.getElementById('subtotal');
    result = prices.reduce((total, currentPrice) => {
        return total + currentPrice;
    }, 0);
    subtotal.innerText = result.toFixed(2).replace(".", ",") + "€";
    calculateTotal();
};

function calculateTotal() {
    let totalSum = document.getElementById("total_sum");
    let subTotal = (document.getElementById('subtotal').innerText).replace(",", ".");
    let subTotalResult = parseFloat (subTotal);
    let fee = parseInt(document.getElementById('delivery_costs').innerText);
    if (subTotalResult === 0) {
        document.getElementById('delivery_costs').innerText = "5€";
        fee = 0;
    };
    if (subTotalResult >= 30) {
        document.getElementById('delivery_costs').innerText = "0€";
        result = subTotalResult;
    } else {
        document.getElementById('delivery_costs').innerText = "5€";
        result = fee + subTotalResult;
    }
    totalSum.innerText = result.toFixed(2).replace(".", ",") + "€";
    renderAllPayment();   
};


function singleCalculation(price, amount, indexDishes){
    let singlePriceDisplay = document.getElementById((indexDishes) + "price");
    result = price * amount;
    singlePriceDisplay.innerText = result.toFixed(2).replace(".", ",") + "€";
};

