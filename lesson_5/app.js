// DOM - Document Object Model

// DOM Manipulation

// поиск элементов
// удаление элементов
// изменение стилей элементов
// изменение содержимого элементов
// добавление новых элементов
// обработка событий


let button = document.querySelector("#changeColorBtn");
// let button = document.querySelectorAll(".class");
// let button = document.getElementById("changeColorBtn");
// let button = document.getElementsByTagName("button");
// let button = document.getElementsByClassName("class");

button.innerText = "#000000";

// button.style.backgroundColor = "yellow";

function buildPopup(title) {
    let popup = document.createElement("div"); // <div></div>
    popup.style.position = "absolute";
    popup.style.top = "15%";
    popup.style.left = "42%";
    popup.style.width = "300px"
    popup.style.height = "120px";
    popup.style.backgroundColor = "#FFF";
    popup.style.color = "#000"
    popup.style.fontSize = "3rem";
    popup.style.display = "flex";
    popup.style.alignItems = "center";
    popup.style.justifyContent = "center";
    popup.innerText = title;
    return popup;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomHex(){
    return getRandomNumber(0, 255).toString(16).padStart(2, "0");
}
function getRandomColor() {
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return `#${red}${green}${blue}`.toUpperCase();
}

function changeBackground() {
    let color = getRandomColor();
    document.body.style.backgroundColor = color;
    button.innerText = color;
}

function copyToClipboard(){
    let color = button.innerText;
    window.navigator.clipboard.writeText(color);
    let popup = buildPopup("Copied!");
    document.body.append(popup);
    setTimeout(function () {
        popup.remove();
    }, 2000);
}

button.addEventListener("click", changeBackground);

button.onmouseleave = copyToClipboard;


// let popup = buildPopup("Hello");
// document.body.append(popup);

setInterval(changeBackground, 500);

