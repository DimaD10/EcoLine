const inputValue = document.querySelector(".calculator__input");
const range = document.querySelector(".calculator__range");
const rangeProgress = document.querySelector(".progress-line");

const depositGraph = document.getElementById("deposit-graph");
const gutter = 2.85;

range.oninput = (() => {
    let value = range.value;
    inputValue.value = `${value}`;

    valPercent = ((range.value - 50) / (range.max - 50)) * 100;
    range.style.background = `linear-gradient(to right, #A2EC48 ${valPercent}%, #E4EEF5 ${valPercent}%)`;

    let currencyParrent = document.getElementById('choosen-currency');
    let currency = currencyParrent.querySelector('.currency').textContent;
    depositGraph.style.height = `${value * gutter}px`;
    depositGraph.title = `${value} ${currency}`;

    calcDeposit(value, currency)
});

inputValue.oninput = (() => {
    let value = inputValue.value;
    range.value = `${value}`;

    valPercent = ((range.value - 50) / (range.max - 50)) * 100;
    range.style.background = `linear-gradient(to right, #A2EC48 ${valPercent}%, #E4EEF5 ${valPercent}%)`;
    
    let currencyParrent = document.getElementById('choosen-currency');
    let currency = currencyParrent.querySelector('.currency').textContent;
    depositGraph.style.height = `${value * gutter}px`;
    depositGraph.title = `${value} ${currency}`;

    calcDeposit(value, currency)
});




function calcDeposit(val, currency) {
    const minGrowCoef = 0.01;
    const maxGrowCoef = 0.014;
    const pureGrowTimeCoef = 0.1874;
    const pureGrowMonthCoef = 0.375;
    const totalGrowCoef = 1.1874;

    let minGrow = document.getElementById("min-grow-day");
    let maxGrow = document.getElementById("max-grow-day");
    let pureGrowTime = document.getElementById("pure-grow-time");
    let pureGrowMonth = document.getElementById("pure-grow-month");
    let totalGrow = document.getElementById("total-grow");

    minGrow.textContent = `${(val * minGrowCoef).toFixed(2)} ${currency}`;
    maxGrow.textContent = `${(val * maxGrowCoef).toFixed(2)} ${currency}`;
    pureGrowTime.textContent = `${(val * pureGrowTimeCoef).toFixed(2)} ${currency}`;
    pureGrowMonth.textContent = `${(val * pureGrowMonthCoef).toFixed(2)} ${currency}`
    totalGrow.textContent = `${(val * totalGrowCoef).toFixed(2)} ${currency}`;

    let pureGrowGraph = document.getElementById("grow-graph");
    pureGrowGraph.style.height = `${((val * pureGrowTimeCoef).toFixed(2)) * gutter}px`;
    pureGrowGraph.title = `${(val * pureGrowTimeCoef).toFixed(2)} ${currency}`;

    let totalGrowGraph = document.getElementById("total-graph");
    totalGrowGraph.style.height = `${(((val * pureGrowTimeCoef).toFixed(2)) * gutter) + (val * gutter)}px`;
    totalGrowGraph.title = `${((val * totalGrowCoef).toFixed(2))} ${currency}`;
}