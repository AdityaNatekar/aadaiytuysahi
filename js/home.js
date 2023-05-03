const greeting = document.querySelector('.greeting');

window.onload = () => {

        location.href = '/login';
}

const logOut = document.querySelector('.logout');

logOut.onclick = () => {
    sessionStorage.clear();
    location.reload();
}