function renderAllDishes() {
    renderSalat()
    renderPizza()
    renderSideDish()
}



function toogleCart() {
    document.getElementById("cart").classList.toggle('d_none');
    document.getElementById("main").style.width="100%";
}