const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // greeting.innerText = "Hello " + username; paintGreetings에 사용한 방식이 더 좋음
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;  // 백틱 사용
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername =localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    greeting.innerText = `Hello ${savedUsername}`;
    paintGreetings(savedUsername)
}