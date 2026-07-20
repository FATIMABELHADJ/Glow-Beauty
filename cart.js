// عدد المنتجات في الشنطة

function updateCartCount(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let count = document.getElementById("cartCount");

    if(count){

        count.textContent = cart.length;

    }

}




// إضافة منتج للسلة

function addToCart(name, price){


    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    cart.push({

        name:name,
        price:price

    });



    localStorage.setItem("cart", JSON.stringify(cart));


    updateCartCount();


    alert(name + " added to cart 🛒");


}






// عناصر صفحة Cart

let cartItems = document.getElementById("cartItems");

let totalBox = document.getElementById("total");


let cart = JSON.parse(localStorage.getItem("cart")) || [];





// عرض السلة

function displayCart(){


    if(!cartItems) return;


    cartItems.innerHTML = "";


    let total = 0;



    if(cart.length === 0){


        cartItems.innerHTML = `

        <h2>
        Your cart is empty 🛒
        </h2>

        `;


        totalBox.textContent = "Total : 0 DA";


        return;

        
    }





    cart.forEach((product,index)=>{


        let div = document.createElement("div");


        div.className="product-cart";



        div.innerHTML = `

        <h3>${product.name}</h3>

        <p>${product.price} DA</p>


        <button onclick="removeProduct(${index})">

        Remove

        </button>

        `;



        cartItems.appendChild(div);



        total += product.price;



    });



    totalBox.textContent = "Total : " + total + " DA";



}







// حذف منتج

function removeProduct(index){


    cart.splice(index,1);


    localStorage.setItem("cart", JSON.stringify(cart));


    displayCart();


    updateCartCount();


}






// حذف كامل السلة

function clearCart(){


    cart = [];


    localStorage.removeItem("cart");


    displayCart();


    updateCartCount();


}






// تشغيل عند فتح الصفحة

displayCart();

updateCartCount();
window.onload = function(){

    displayCart();

    updateCartCount();

};
window.addEventListener("storage", function(){

    updateCartCount();

});
function clearCart(){

    localStorage.removeItem("cart");

    cart = [];

    displayCart();

    updateCartCount();

}
function goCheckout(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if(cart.length === 0){

        alert("Your cart is empty 🛒");
        return;

    }

    window.location.href="checkout.html";

}