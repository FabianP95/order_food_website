const priceDisplay = document.getElementById("show_price");
const priceDisplayResp = document.getElementById("show_price_resp_cart");
const priceDisplayDialog = document.getElementById("show_price_dialog_cart");
const respCartContent = document.getElementById('resp_cart_content');
const priceRef = document.getElementById('show_payment');
const priceDestinationRef = document.getElementById('show_payment_resp');
const dialog = document.getElementById("dialog");
const shopMessage = document.getElementById("message");

function message() {
    shopMessage.show();
};

window.onclick = function (event) {
    if (event.target == shopMessage) {
        shopMessage.close();
    };
};

function toogleCart() {
    document.getElementById("cart").classList.toggle('d_none');
    document.getElementById("main").style.width = "100%";
};

function dialog_close() {
    dialog.close();
};

function dialog_open() {
    dialog.show();
};

function toogleCart() {
    document.getElementById("cart").classList.toggle('d_none');
    document.getElementById("main").style.width = "100%";
};

function renderRespCart() {
    respCartContent.innerHTML = cartContent.innerHTML;
    priceDestinationRef.innerHTML = priceRef.innerHTML;
};

function emptyCart() {
    if (cartContent.innerHTML !== "") {
        message();
    }
    renderPayment();
    cartContent.innerHTML = "";
    prices = [];
    renderRespCart();
    emptyPriceDisplays();
};

function emptyPriceDisplays() {
    priceDisplay.innerHTML = "";
    priceDisplayResp.innerHTML = "";
    priceDisplayDialog.innerHTML = "";
};

function toggleEffect() {
    let element = document.getElementById("order");
    if (cartContent.hasChildNodes() === false) {
        element.classList.remove('order_Btn_hover');
        element.classList.remove('order_Btn_hover_effect');
        console.log(1);
    }
    if (cartContent.hasChildNodes() === true) {
        element.classList.add('order_Btn_hover');
        element.classList.add('order_Btn_hover_effect');
        console.log(2);
    };
};

