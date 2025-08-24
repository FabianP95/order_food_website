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
