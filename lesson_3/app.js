let carLabel = "Toyota";

//DRY - Don't Repeat Yourself

switch (carLabel) { // ===
    case "Mersedes-benz":
    case "Audi":
    case "BMW":
        console.log("Germany 🇩🇪");
        break;
    case "Toyota":
    case "Honda":
    case "Mazda":
        console.log("Japan 🇯🇵");
        break;
    case "KIA":
    case "Huyndai":
        console.log("South Korea 🇰🇷");
        break;
    default:
        console.warn("I don't know this car label");
}

// Boolean - > < >= <= === == !== !=

// strict строгое === (рекомендую)
// non-strict нестрогое ==

let weekdayIndex = 1;
let culture = "en-us";

switch (weekdayIndex) {
    case 1: // ===
        if (culture === "en-us") {
            console.log("sunday");
        }else {
            console.log("monday");
        }
        break;
    case 2:
        console.log("tuesday");
        break;
    default:
        console.error("You don't know how switch..case works")
}

// Array - массив

let frontendMentors = ["Felix", "Evgeniy", "Nurdin", "Atai", "Igor"];
//                                   0          1         2        3       4

let students = [];

let bankOperations = [50_000, -1_000, -5_000, 3_000, -4_500, -500, -10_000];

let bankStatement = {
    incomeTotal: 0,
    expensesTotal: 0,
    currentBalance: 0
}

// for..of

for(let operation of bankOperations){
    if(operation > 0){
        bankStatement.incomeTotal += operation;
    }else{
        bankStatement.expensesTotal += Math.abs(operation);
    }
    bankStatement.currentBalance += operation;
}

console.table(bankStatement);

let children = [1992, 2002, 2015, 2014, 2017, 2020, 2014, 2013, 1999, 2000, 2005];
let childrenWithGift = [];
let currentYear = 2024;
let giftCount = 0;

for(let childYear of children){
    let childAge = currentYear - childYear;
    if(childAge >= 6 && childAge <= 12){
        // giftCount += 1;
        giftCount++;
        childrenWithGift.push(childYear);
    }
}

console.log(giftCount + " of " + children.length + " gets gifts");
console.log(childrenWithGift);

let INN = "2O1012000-----";

// for со счетчиком

// iteration (iterator)

// debugging - отладка

for(let i = 0; i < INN.length; i++){
    let digit = Number(INN[i]);
    if(isNaN(digit)){
        console.error("Error on position", i+1);
    }
}

for(let i = 1; i <= 10; i++){
    console.log(i + " ^ 2 = " + i**2);
}









