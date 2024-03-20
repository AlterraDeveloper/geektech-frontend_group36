function createCell() {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    // cell.className = "cell";
    return cell;
}

const getDefaultColor = () => "#1d1d1d";

// function getDefaultColor(){
//     return "#1d1d1d";
// }

function getRandomColor() {
    const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
    const randomIndex = Math.ceil(Math.random() * colors.length - 1)
    return colors[randomIndex];
}

const wrapper = document.querySelector(".wrapper");
const cellCount = 300;

for (let i = 0; i < cellCount; i++) {
    const cell = createCell();
    wrapper.append(cell);
}

const cells = wrapper.querySelectorAll(".cell");

for (const cell of cells) {
    cell.addEventListener("mouseover", function (event) {
        event.target.style.backgroundColor = getRandomColor();
    });

    cell.addEventListener("mouseleave", function (event) {
        event.target.style.backgroundColor = getDefaultColor();
    });
}



