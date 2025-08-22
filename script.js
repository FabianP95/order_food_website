function renderAllDishes() {
    renderSalat()
    renderPizza()
    renderSideDish()
}

function renderSalat() {
    let contentRef = document.getElementById('salads');
    for (let indexSalad = 0; indexSalad < dishes.length -7; indexSalad++) {
        contentRef.innerHTML += getSalatsTemplate(indexSalad);
    }
}

function renderPizza() {
    let contentRef = document.getElementById('pizza');
    for (let indexPizza = 3; indexPizza < dishes.length -3; indexPizza++) {
        contentRef.innerHTML += getPizzaTemplate(indexPizza);
    }
}

function renderSideDish() {
    let contentRef = document.getElementById('side_dish');
    for (let indexSideDish = 7; indexSideDish < dishes.length ; indexSideDish++) {
        contentRef.innerHTML += getSideDishTemplate(indexSideDish);
    }
}