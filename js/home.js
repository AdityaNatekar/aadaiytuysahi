const greeting = document.querySelector('.greeting');

window.onload = () => {
}

const logOut = document.querySelector('.logout');

logOut.onclick = () => {
    sessionStorage.clear();
    location.reload();
}