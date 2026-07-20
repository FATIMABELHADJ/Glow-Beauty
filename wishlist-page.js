let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

let container = document.getElementById("wishlistItems");

function showWishlist(){

    container.innerHTML = "";

    if(wishlist.length === 0){

        container.innerHTML = "<h2>No products in your wishlist 💔</h2>";

        return;
    }

    wishlist.forEach((product,index)=>{

        container.innerHTML += `

        <div class="wish-card">

            <img src="${product.img}">

            <h3>${product.name}</h3>

            <p>${product.price}</p>

            <button class="remove-btn" onclick="removeItem(${index})">

                Remove

            </button>

        </div>

        `;
    });
}

function removeItem(index){

    wishlist.splice(index,1);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    showWishlist();
}

showWishlist();