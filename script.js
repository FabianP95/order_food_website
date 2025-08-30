function renderAllDishes() {
    renderSalat();
    renderPizza();
    renderSideDish();
    renderPayment();
}

function toogleCart() {
    document.getElementById("cart").classList.toggle('d_none');
    document.getElementById("main").style.width = "100%";
}

function dialog_close() {
    let element = document.getElementById("dialog");
    element.close();
}

function dialog_open() {
    let element = document.getElementById("dialog");
    element.show();
}

function renderRespCart() {
    let contentRef = document.getElementById('cart_content');
    let contentDestination = document.getElementById('resp_cart_content');
    let priceRef = document.getElementById('show_payment');
    let priceDestinationRef = document.getElementById('show_payment_resp');
    contentDestination.innerHTML = contentRef.innerHTML;
    priceDestinationRef.innerHTML = priceRef.innerHTML;
}

function message() {
    let message = document.getElementById("message");
    message.show();
}

function deleteCartContent() {
    renderPayment();
    let contentRef = document.getElementById('cart_content');
    contentRef.innerHTML = "";
    prices = [];
    renderRespCart();
}

window.onclick = function (event) {
    let element = document.getElementById("message");
    if (event.target == element) {
        element.close();
    }
}
