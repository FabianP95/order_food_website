

function addToCart(indexDishes) {
    let contentRef = document.getElementById('cart_content');
    let orderItem = document.getElementById(indexDishes);
    let prices = [];
    if (document.body.contains(orderItem) === true) {
        increaseAmount(indexDishes)
        return
    }
    else {
        contentRef.innerHTML += getDishtoCart(indexDishes);
        let price = parseFloat(document.getElementById((indexDishes) + "price").innerText);
        prices.push(price);
        calculateSubTotal(prices);
    }
}

function decreaseAmount(indexDishes) {
    var amount = parseInt(document.getElementById((indexDishes) + "amount").innerHTML, 10);
    let price = parseFloat(document.getElementById((indexDishes) + "price").innerText);
    let prices = [];
    amount--;
    document.getElementById((indexDishes) + "amount").innerHTML = amount + "x";
    if (amount <= 0) {
        prices.pop(price);
        deleteItem(indexDishes)
    }
    prices.pop(price);
    calculateSubTotal(prices);
}

function increaseAmount(indexDishes) {
    let amount = parseInt(document.getElementById((indexDishes) + "amount").innerHTML, 10);
    let price = parseFloat(document.getElementById((indexDishes) + "price").innerText);
    let prices = [];
    amount++;
    document.getElementById((indexDishes) + "amount").innerHTML = amount + "x";
    if (amount >= 21) {
        document.getElementById((indexDishes) + "amount").innerHTML = 20 + "x";
        return
    } else {
        prices.push(price);
        calculateSubTotal(prices);
    }
}

function deleteItem(indexDishes) {
    let price = parseFloat(document.getElementById((indexDishes) + "price").innerText);
    let contentRef = document.getElementById(indexDishes);
    
    for (let index = 0; index < prices.length; index++) {
        
        prices.splice(indexDishes, 1);
    }
    
    calculateSubTotal()
    contentRef.remove();
}


function calculateSubTotal(prices) {
    let subtotal = document.getElementById('subtotal');
    result = prices.reduce((total, currentPrice) => {
        return total + currentPrice
    }, 0)
    subtotal.innerText = result.toFixed(2) + "€";
    calculateTotal()
}

function calculateTotal() {
    let total = document.getElementById('total_sum');
    let fee = parseInt(document.getElementById('delivery_costs').innerText);
    let subtotal = parseFloat(document.getElementById('subtotal').innerText);
    if (subtotal === 0 || subtotal >= 30 ) {
        document.getElementById('delivery_costs').innerText = "0€";
        result = subtotal;
       
    }  else  {
        document.getElementById('delivery_costs').innerText = "5€";
        result = fee + subtotal;
    }
    total.innerText = result.toFixed(2) + "€";
}

