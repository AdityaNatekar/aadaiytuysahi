// form loading animation

const form = [...document.querySelector('.form').children];

form.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 1;
    }, i*100);
})

window.onload = () => {
    if(sessionStorage.name){
        location.href = '/';
    }
}

const hardcodedUsername = "AAA";
const hardcodedPassword = "AAA";

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === hardcodedUsername && password === hardcodedPassword) {
        alert("Login successful!");
        // Redirect the user to the desired page
        window.location.href = "/login.html";
    } else {
        alert("Invalid username or password");
    }
}


const alertBox = (data) => {
    const alertContainer = document.querySelector('.alert-box');
    const alertMsg = document.querySelector('.alert');
    alertMsg.innerHTML = data;

    alertContainer.style.top = `5%`;
    setTimeout(() => {
        alertContainer.style.top = null;
    }, 5000);
}