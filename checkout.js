let cart = JSON.parse(localStorage.getItem("cart")) || [];


let total = 0;


cart.forEach(product=>{

    total += Number(product.price.replace(" DA",""));

});


document.getElementById("checkoutTotal").textContent =
"Total : " + total + " DA";



function confirmOrder(){


let name = document.getElementById("name").value;

let phone = document.getElementById("phone").value;

let address = document.getElementById("address").value;



if(name=="" || phone=="" || address==""){

    alert("Please fill all information ✨");
    return;

}



// نخزنو معلومات الزبون
let customer = {

    name:name,
    phone:phone,
    address:address

};


localStorage.setItem(
    "customer",
    JSON.stringify(customer)
);



alert(
"Information saved ✅\nContinue to payment 💳"
);



window.location.href="payment.html";


}
function checkCCP(number){

    if(number.length !== 10){

        alert("CCP number must contain 10 digits");
        return false;

    }

    return true;

}