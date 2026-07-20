let orders = JSON.parse(localStorage.getItem("orders")) || [];

let box = document.getElementById("orders");


if(orders.length === 0){

    box.innerHTML = "<h2>No Orders Yet 📦</h2>";

}


orders.forEach(order => {


let productsHTML = "";


order.products.forEach(product => {


productsHTML += `

<div class="product-order">

<h4>${product.name}</h4>

<p>Price: ${product.price} DA</p>

</div>

`;



});



box.innerHTML += `

<div class="order-card">


<h3>Order 📦</h3>


<p>Date: ${order.date}</p>


<p>Status: ${order.status}</p>


<h4>Products:</h4>


${productsHTML}



</div>

`;



});
function goHome(){

    window.location.href="ind.html";

}