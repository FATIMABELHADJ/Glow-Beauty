let buttons = document.querySelectorAll(".cart-btn");


buttons.forEach(function(button){

    button.addEventListener("click", function(){

        let user = localStorage.getItem("user");


        if(user == null){

            alert("Please Sign In first");

            window.location.href="login.html";

        }
        else{

            alert("Product added to cart 🛒");

        }


    });

});
const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", function () {

    let value = searchInput.value.toLowerCase();

    let cards = document.querySelectorAll(".product-card");

    cards.forEach(function(card){

        let title = card.querySelector("h3").textContent.toLowerCase();

        if(title.includes(value)){

            card.style.display = "";

        }else{

            card.style.display = "none";

        }

    });

});
const icon = document.getElementById("searchIcon");

const search = document.getElementById("search");

icon.onclick = function(){

    search.classList.toggle("active");

    search.focus();

}
const hearts = document.querySelectorAll(".wishlist");

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

hearts.forEach(function(heart){

    let card = heart.closest(".product-card");

    let productName = card.querySelector("h3").textContent;

    if(favorites.includes(productName)){

        heart.classList.add("active");

        heart.querySelector("i").classList.replace("fa-regular","fa-solid");

    }

    heart.addEventListener("click",function(){

        let icon = heart.querySelector("i");

        if(heart.classList.contains("active")){

            heart.classList.remove("active");

            icon.classList.replace("fa-solid","fa-regular");

            favorites = favorites.filter(item => item !== productName);

        }else{

            heart.classList.add("active");

            icon.classList.replace("fa-regular","fa-solid");

            favorites.push(productName);

        }

        localStorage.setItem("favorites",JSON.stringify(favorites));

    });

});