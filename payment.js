function choosePayment(method){

let form = document.getElementById("paymentForm");


if(method === "CCP"){

form.innerHTML = `

<h3>CCP Information</h3>

<input id="ccpNumber" placeholder="Account Number">

<input id="ccpName" placeholder="Name">

<button onclick="finishOrder()">
Pay Now ✅
</button>

`;

}


else if(method === "PayPal"){


form.innerHTML = `

<h3>PayPal</h3>

<input id="paypalEmail" placeholder="PayPal Email">

<button onclick="finishOrder()">
Continue with PayPal 🅿️
</button>

`;

}


else{


form.innerHTML = `

<h3>Cash on Delivery</h3>

<p>You will pay when you receive your order.</p>

<button onclick="finishOrder()">
Confirm ✅
</button>

`;

}


}




function finishOrder(){


let cart = JSON.parse(localStorage.getItem("cart")) || [];


if(cart.length === 0){

    alert("Your cart is empty 🛒");
    return;

}



let orders = JSON.parse(localStorage.getItem("orders")) || [];



let newOrder = {

    products: cart,

    date: new Date().toLocaleDateString(),

    status: "Pending"

};



orders.push(newOrder);



localStorage.setItem(
    "orders",
    JSON.stringify(orders)
);



localStorage.removeItem("cart");



alert("Order confirmed 🎉");


window.location.href="orders.html";


}