console.log("lesson 8");

// DOM - Document Object Model
// DOM-tree

// key - value
const me = {
    name: "Evgeniy",
    surname: "Kiselev",
    fatherName: "Dmitrievich",
    currentGroup: "Geeks 36-2F31012024",
    experience: 3,
    educationMonth: 2,
    skills: ["JavaScript", "variables", "conditions", "loops", "data types", "operators", "functions", "objects", "DOM"]
}

const newButton = document.createElement("button");
newButton.innerText = "Click me";
newButton.style.backgroundColor = "purple";
newButton.style.padding = "2rem";
newButton.style.width = "100px";
newButton.style.height = "50px";
document.body.append(newButton);

setTimeout(() => {
    document.body.style.backgroundColor = "green";
    const button = document.querySelector("button");
    button.innerText = "Hello JavaScript";
}, 2500);

setTimeout(() => {
    const button = document.querySelector("button");
    button.remove();


    const titleTag = document.head.querySelector("title");
    titleTag.innerText = "Lesson 8";

}, 5000);


document.addEventListener("contextmenu", (event) => {
    // event.preventDefault();
});

function sumNumbers(num1, num2) {
    return num1 + num2;
}

console.log(sumNumbers(5, 14));

function calculator(num1, num2, operation) {
    return operation(num1, num2);
}

console.log(calculator(5, 14, sumNumbers))
console.log(calculator(5, 14, (a, b) => a - b));
console.log(calculator(5, 14, (a, b) => b - a));


function formatNumber(number, callback){
    return callback(number);
}

// 5.5
// 5,5
function BakaiBankFormat(number){
    const integerPart = Math.trunc(number)
    let floatPart = number % 1;
    const dotIndex = floatPart.toString().indexOf(".");
    floatPart = floatPart.toString().slice(dotIndex + 1);
    return `${integerPart}.${floatPart}`;
}

function OptimaBankFormat(number){
    const integerPart = Math.trunc(number)
    let floatPart = number % 1;
    const dotIndex = floatPart.toString().indexOf(".");
    floatPart = floatPart.toString().slice(dotIndex + 1);
    return `${integerPart},${floatPart}`;   
}

const transfer = 100.52;

console.log(formatNumber(transfer, BakaiBankFormat));
console.log(formatNumber(transfer, OptimaBankFormat));