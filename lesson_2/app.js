// console.log("lesson 2");
// alert("lesson 2");
// document.write("lesson 2");

// V8 - JS Engine (интерпретатор)

// var, let, const  - let

// 1. String

let string = "text text";
let string2 = 'text text';

// Concatenation - конкатенация

let bookPrice = "9";

console.log(bookPrice + bookPrice + " $");
console.log(string + string2 + string2);

// escaping - экранирование

let bookTitle = "\"Lord of the rings\" of Tolkin's";
let songTitle = "Celine Dion - \"Titanik\"";
let pathToMyProject = "C:\\Code\\Onlinebank\\Services";
console.log(bookTitle + "\n" + songTitle);
console.log(pathToMyProject);

let clientSurname = 'Kiselev';
let clientName = "Evgeniy";
let clientFatherName = "Dmitrievich";

console.log(clientSurname + " " + clientName[0] + "." + clientFatherName[0] + ".")

// 2. Number

// + - * / ** %

let bankCard = {
    number: "2132 2131 2131 1233",
    balance: 1000
};

console.log("Before: " + bankCard.balance + " c");

// bankCard.balance = bankCard.balance + 100;
// bankCard.balance += 100;
// bankCard.balance -= 50;
// bankCard.balance *= 0;
// bankCard.balance /= 0; // Infinity
// bankCard.balance **= 2;
// bankCard.balance %= 2;

// NaN - Not a Number

console.log("After: " + bankCard.balance + " c");

let text = "XXXX "; // XXXX XXXX XXXX XXXX
console.log(text * 4); // NaN
console.log(text.repeat(4));

// 3. Boolean

// операторы сравнения: > < >= <= != == === !==
// логические операторы: &&(AND) ||(OR) !(NOT)

let withdrawAmount = prompt("How much you want to withdraw");

if (withdrawAmount > bankCard.balance) {
    console.error("Not enough money");
} else {
    bankCard.balance -= withdrawAmount;
}

console.log("Card balance: " + bankCard.balance + " c");

let developerLevel = "junior";

if (developerLevel === "junior") {
    console.log("100-500 $");
} else if (developerLevel === "middle") {
    console.log("500-1500 $");
} else if (developerLevel === "senior") {
    console.log("1500-6000 $");
} else {
    console.warn("invalid developer level");
}

let geeksStudent = {
    homeworkTotal: 65,
    lessonsTotal: 7,
    testsTotal: 40 + 14,
    currentMonth: 2,
    activity: "frontend"
};

if (geeksStudent.homeworkTotal > 60
    && geeksStudent.lessonsTotal >= 6
    && geeksStudent.testsTotal >= 60) {
    console.log("Free repeat");
}

let currentWeekday = "wed";

if (currentWeekday === "wed" || currentWeekday === "sat") {
    console.log("Yohooo js lesson")
} else {
    console.log("No lesson((")
}

if (currentWeekday === "mon" || currentWeekday === "sun") {
    console.log("weekday");
} else {
    console.log("workday");
}

let person = {
    age: 45,
    sex: "male"
}

if ((person.sex === "male" && person.age >= 62)
    || (person.sex === "female" && person.age >= 56)) {
    console.log("Yes")
} else {
    console.log("no");
}

let amountInKgs = 50_000;
let currency = "KZT";
let convertedAmount = 0;

if (currency === "USD") {
    convertedAmount = amountInKgs / 89.5;
} else if (currency === "EUR") {
    convertedAmount = amountInKgs / 96;
} else if (currency === "RUB") {
    convertedAmount = amountInKgs / 1.2;
} else {
    console.error("Not supported currency");
}

switch (currency) {
    case "USD":
        convertedAmount = amountInKgs / 89.5;
        break;
    case "EUR":
        convertedAmount = amountInKgs / 96;
        break;
    case "RUB":
        convertedAmount = amountInKgs / 1.2;
        break;
    default:
        console.error("Not supported currency");
}

console.log("converted: " + convertedAmount);

let teachers;


switch (geeksStudent.currentMonth) {
    case 1:
        teachers = ["Felix"];
        break;
    case 2:
        teachers = ["Evgeniy", "Aidana"];
        break;
    case 3:
        teachers = ["Nurdin", "Igor"];
        break;
}

let skills ;

switch (geeksStudent.activity){
    case 'frontend':
        skills = ["HTML", "CSS", "JS", "React", "Redux"]
        break;
    case 'backend':
        skills = ['Python', "Django", "Postgresql", "Java"];
        break;
}


// 4. Undefined
// 5. Null
// 6. Object

