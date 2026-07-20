let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function updateWishlistCount() {
    const count = document.getElementById("wishCount");
    if (count) {
        count.textContent = wishlist.length;
    }
}

document.querySelectorAll(".heart-product").forEach((heart) => {

    const card = heart.closest(".product-card");

    const name = card.querySelector("h3").innerText;
    const price = card.querySelector("p").innerText;
    const img = card.querySelector("img").getAttribute("src");

    // إذا المنتج موجود نخلي القلب أحمر
    if (wishlist.some(item => item.name === name)) {

        heart.classList.add("active");

        const icon = heart.querySelector("i");
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
        icon.style.color = "red";
    }

    heart.addEventListener("click", () => {

        const icon = heart.querySelector("i");

        const index = wishlist.findIndex(item => item.name === name);

        if (index === -1) {

            wishlist.push({
                name,
                price,
                img
            });

            heart.classList.add("active");
            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");
            icon.style.color = "red";

        } else {

            wishlist.splice(index, 1);

            heart.classList.remove("active");
            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");
            icon.style.color = "#8b5e8c";

        }

        localStorage.setItem("wishlist", JSON.stringify(wishlist));

        updateWishlistCount();

    });

});

updateWishlistCount();