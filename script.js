function renderAllDishes() {
    renderSalat()
    renderPizza()
    renderSideDish()
}

function toogleCart() {
    document.getElementById("cart").classList.toggle('d_none');
    document.getElementById("main").style.width = "100%";
}

function dialog_close() {
    let element = document.getElementById("dialog");
    element.open = false;
    document.body.style.overflow = "scroll";
}

function dialog_open() {
    document.body.style.overflow = "hidden";
    let element = document.getElementById("dialog");
    element.open = true;
    element.style.overflow = "scroll";
}

function addToCart(indexDishes) {
    let contentRef = document.getElementById('cart_content');
    contentRef.innerHTML += getDishtoCart(indexDishes);
    if (dishes[indexDishes].amount <= 1) {
        dishes[indexDishes].amount = 1;
    }

}

function renderRespCart() {
    let contentRef = document.getElementById('cart_content');
    let contentDestination = document.getElementById('resp_cart_content');
    contentDestination.innerHTML = contentRef.innerHTML;
}

function renderCart() {
    let contentRef = document.getElementById('resp_cart_content');
    let contentDestination = document.getElementById('cart_content');
    contentDestination.innerHTML = contentRef.innerHTML;
}

function calculateSubTotal(indexDishes) {
    let subtotal = document.getElementById('subtotal');
    let amount = parseInt(document.getElementById((indexDishes)+"amount").innerHTML, 10);
    let price = parseInt(document.getElementById((indexDishes)+"price").innerHTML, 10);
    subtotal.innerHTML = amount*price + "€";
}

function calculateTotal() {
    let contentRef = document.getElementById('total_sum');
}

function decreaseAmount(indexDishes) {
    var amount = parseInt(document.getElementById((indexDishes)+"amount").innerHTML, 10);
    amount--;
    document.getElementById((indexDishes)+"amount").innerHTML = amount + "x";
    if (amount <= 0) {
        deleteItem(indexDishes)
    }
}

function increaseAmount(indexDishes) {
    let amount = parseInt(document.getElementById((indexDishes)+"amount").innerHTML, 10);
    amount++;
    document.getElementById((indexDishes)+"amount").innerHTML = amount + "x";
    if (amount >= 20) {
        document.getElementById((indexDishes)+"amount").innerHTML = 20 + "x"
    }
}


function deleteItem(indexDishes) {
    let contentRef = document.getElementById(indexDishes);
    contentRef.remove();
}


