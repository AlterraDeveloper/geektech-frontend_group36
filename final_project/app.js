const kmInput = document.querySelector("#kmInput");
const kmPerDaysContainer = document.querySelector(".kmPerDays");
const kmForm = document.querySelector("#form");

const totalValue = document.querySelector("#total-value");
const averageValue = document.querySelector("#average-value");
const highestValue = document.querySelector("#highest-value");
const progressText = document.querySelector("#progress-text");
const progressCircle = document.querySelector(".circle");
const lastDaysCount = 7;

let currentKilometres = Array.from({length: lastDaysCount}, () => null);

// <div class="kmPerDay">-</div>
function buildKmPerDayItem(value) {
    const div = document.createElement("div");
    div.className = "kmPerDay";
    div.innerText = (value === null ? "-" : value);
    return div;
}

function renderKmPerDays(container, kmPerDayValues) {
    container.innerHTML = "";
    for (const kmPerDayValue of kmPerDayValues) {
        container.append(buildKmPerDayItem(kmPerDayValue));
    }
}

function renderTotal() {
    // let totalSum = 0;
    // for (const value of currentKilometres) {
    //     totalSum += value;
    // }
    totalValue.innerText = currentKilometres.reduce((totalSum, value) => totalSum += value, 0);
}

function renderAverage() {
    const sum =  currentKilometres.reduce((totalSum, value) => totalSum += value, 0);
    const count = currentKilometres.filter(value => value !== null).length;
    averageValue.innerText = sum / count;
}

function renderHighest() {
    highestValue.innerText = Math.max(...currentKilometres);
}

function renderProgress(){
    const sum =  currentKilometres.reduce((totalSum, value) => totalSum += value, 0);
    const targetValue = 25;
    progressText.innerText = `Weekly target: ${sum} / ${targetValue} kilometers`;

    const percentage = sum * 100 / targetValue;
    progressCircle.style.background = `conic-gradient(#70db70 ${percentage}%, #2d3740 ${percentage}%, #2d3740 100%)`

}

renderKmPerDays(kmPerDaysContainer, currentKilometres);

kmForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const kilometersValue = Number(kmInput.value);

    if (!kilometersValue) {
        alert("Value required");
        return;
    }

    addKilometers(kilometersValue);
    renderKmPerDays(kmPerDaysContainer, currentKilometres);

    renderTotal();
    renderAverage();
    renderHighest();
    renderProgress();
});

Array.prototype.takeLast = function (count) {
    const startIndex = this.length - count;
    return this.slice(startIndex);
}

function addKilometers(value) {
    currentKilometres.push(value);
    currentKilometres = currentKilometres.takeLast(lastDaysCount);
}


