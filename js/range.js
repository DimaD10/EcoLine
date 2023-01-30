const inputValue = document.querySelector(".calculator__input");
const range = document.querySelector(".calculator__range");
const rangeProgress = document.querySelector(".progress-line");

const depositGraph = document.getElementById("deposit-graph");

range.oninput = (() => {
    let value = range.value;
    inputValue.value = `${value}`;

    valPercent = ((range.value - 50) / (range.max - 50)) * 100;
    range.style.background = `linear-gradient(to right, #A2EC48 ${valPercent}%, #E4EEF5 ${valPercent}%)`;
});

inputValue.oninput = (() => {
    let value = inputValue.value;
    range.value = `${value}`;

    valPercent = ((range.value - 50) / (range.max - 50)) * 100;
    range.style.background = `linear-gradient(to right, #A2EC48 ${valPercent}%, #E4EEF5 ${valPercent}%)`;
});