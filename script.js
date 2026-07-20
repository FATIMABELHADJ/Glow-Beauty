// ================= USER =================

let username = localStorage.getItem("username");

let profile = document.getElementById("profile");
let menu = document.getElementById("profileMenu");

let usernameBox = document.getElementById("username");
let welcomeUser = document.getElementById("welcomeUser");
let logout = document.getElementById("logout");


// إذا كان المستخدم مسجل

if(username){

    if(usernameBox){
        usernameBox.textContent = username;
    }

    if(welcomeUser){
        welcomeUser.textContent = "Hello " + username + " ✨";
    }

}


// إذا ماكانش مسجل

else{

    if(usernameBox){
        usernameBox.textContent="Login";
    }

    if(menu){

        menu.innerHTML=`

        <a href="login.html">
        Sign In
        </a>

        <a href="register.html">
        Create Account
        </a>

        `;

    }

}



// فتح القائمة

if(profile){

profile.onclick=function(e){

    e.stopPropagation();

    menu.classList.toggle("active");

}

}



// غلق القائمة

document.addEventListener("click",function(){

    if(menu){

        menu.classList.remove("active");

    }

});



// Logout

if(logout){

logout.onclick=function(){

    localStorage.removeItem("username");
    localStorage.removeItem("user");

    window.location.href="ind.html";

}

}
