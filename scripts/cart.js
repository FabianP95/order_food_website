let prices = [];




function addToCart(indexDishes) {
    let contentRef = document.getElementById('cart_content');
    let orderItem = document.getElementById((indexDishes));
    if (contentRef.contains(orderItem) === true) {
        increaseAmount(indexDishes)
        return
    }
    else {
        contentRef.innerHTML += getDishtoCart(indexDishes);
        let price = parseFloat(document.getElementById((indexDishes) + "price").innerText);
        prices.push(price);
        calculateSubTotal();
    }
    
    
}

function decreaseAmount(indexDishes) {
    let amount = parseInt(document.getElementById((indexDishes) + "amount").innerHTML, 10);
    let price = parseFloat(document.getElementById((indexDishes) + "price").innerText);
    amount--;
    document.getElementById((indexDishes) + "amount").innerHTML = amount + "x";
    if (amount <= 0) {
        prices.splice(prices.indexOf(price), 1)
        deleteItem(indexDishes)
        calculateSubTotal();
    } else {
        prices.splice(prices.indexOf(price), 1)
        calculateSubTotal();
    }
}

function increaseAmount(indexDishes) {
    let amount = parseInt(document.getElementById((indexDishes) + "amount").innerHTML, 10);
    let price = parseFloat(document.getElementById((indexDishes) + "price").innerText);
    amount++;
    document.getElementById((indexDishes) + "amount").innerHTML = amount + "x";
    if (amount >= 21) {
        document.getElementById((indexDishes) + "amount").innerHTML = 20 + "x";
        return
    } else {
        prices.push(price);
        calculateSubTotal();
    }
    renderRespCart();
}

function deleteItem(indexDishes) {
    document.getElementById('delivery_costs').innerText = "5€";
    let contentRef = document.getElementById(indexDishes);
    let price = parseFloat(document.getElementById((indexDishes) + "price").innerText);
    let pricesRemove = prices.reduce((ind, el, i) => {
        if (el === price) ind.push(i)
        return ind;
    }, []);
    for (var i = pricesRemove.length - 1; i >= 0; i--) {
        prices.splice(pricesRemove[i], 1)
    }
    calculateSubTotal();
    contentRef.remove();
    renderRespCart();
}

function calculateSubTotal() {
    let subtotal = document.getElementById('subtotal');
    result = prices.reduce((total, currentPrice) => {
        return total + currentPrice
    }, 0)
    subtotal.innerText = result.toFixed(2) + "€";
    calculateTotal();
}

function calculateTotal() {
    let total = document.getElementById('total_sum');
    let subtotal = parseFloat(document.getElementById('subtotal').innerText);
    let fee = parseInt(document.getElementById('delivery_costs').innerText);
    if (subtotal === 0) {
        document.getElementById('delivery_costs').innerText = "5€";
        fee = 0;
    }
    if (subtotal >= 30) {
        document.getElementById('delivery_costs').innerText = "0€";
        result = subtotal;
    } else {
        document.getElementById('delivery_costs').innerText = "5€";
        result = fee + subtotal;
    }
    total.innerText = result.toFixed(2) + "€";
    renderPrice();
    renderRespCart();
}

function renderPrice() {
    let priceDisplay = document.getElementById("show_price");
    let priceInfo = document.getElementById("total_sum");
    priceDisplay.innerHTML = priceInfo.innerHTML;
}


