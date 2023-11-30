const loginButton = document.querySelector(".login-button");

loginButton.addEventListener("click", olaLogado);

function olaLogado() {
    
    const logIn = document.querySelector("#login").value;
    const passWord = document.querySelector("#password").value;
    
    if (logIn === "admin" && passWord === "admin") {
        alert("Olá, você está logado.");
        window.open("welcome.html", target="_self");
    } else {
        alert("Login e/ou senha incorretos!");
    }
    
}