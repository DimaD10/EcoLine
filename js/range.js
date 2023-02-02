const data = {
    labels: ['Депозит', 'Прибыль', 'Общая прибыль'],
    datasets: [{
      label: 'Депозит',
      backgroundColor: ['#A2EC48', '#48D8EC', '#FFA15E'],
      data: [50, 9.37, 59.37],
      borderWidth: 0,
      pointHoverRadius: 10,
      borderRadius: 6,
    }]
}

const config = {
    type: 'bar',
    data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
)

const inputValue = document.querySelector(".calculator__input");
const range = document.querySelector(".calculator__range");
const rangeProgress = document.querySelector(".progress-line");

//const gutter = 2.85;

const minValueSummar = 50;
const maxValueSummar = 1000000;





function calcDeposit(val, currency, numAfterDot) {
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

    minGrow.textContent = `${(val * minGrowCoef).toFixed(numAfterDot)} ${currency}`;
    maxGrow.textContent = `${(val * maxGrowCoef).toFixed(numAfterDot)} ${currency}`;
    pureGrowTime.textContent = `${(val * pureGrowTimeCoef).toFixed(numAfterDot)} ${currency}`;
    pureGrowMonth.textContent = `${(val * pureGrowMonthCoef).toFixed(numAfterDot)} ${currency}`;
    totalGrow.textContent = `${(val * totalGrowCoef).toFixed(numAfterDot)} ${currency}`;


    myChart.data.datasets[0].data[1] = `${val * pureGrowTimeCoef}`;
    myChart.update();

    myChart.data.datasets[0].data[2] = `${val * totalGrowCoef}`;
    myChart.update();
}



var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbitcoin-cash%2Cbinancecoin%2Cbinance-usd%2Clitecoin%2Ctron%2Cusd-coin%2Ccardano&vs_currencies=usd",

    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response){
    range.oninput = (() => {
        let value = range.value;
        inputValue.value = `${value}`;
    
        valPercent = ((range.value - range.min) / (range.max - range.min)) * 100;
        range.style.background = `linear-gradient(to right, #A2EC48 ${valPercent}%, #E4EEF5 ${valPercent}%)`;
    
        myChart.data.datasets[0].data[0] = range.value;
        myChart.update();

        let currencyParrent = document.getElementById('choosen-currency');
        let currency = currencyParrent.querySelector('.currency').textContent;
    
        let minValueParrent = document.getElementById("min-count-value"); 
        let minValue = minValueParrent.querySelector(".currency"); 
        if (minValue.textContent.toUpperCase() === "BTC".toUpperCase()) {
            let value = range.value;
            let currency = "BTC";
            let numAfterDot = 4;
            calcDeposit(value, currency, numAfterDot);
        } else if (minValue.textContent.toUpperCase() === "USD".toUpperCase()) {
            let value = range.value;
            let currency = "USD";
            let numAfterDot = 2;
            calcDeposit(value, currency, numAfterDot);
        } else if (minValue.textContent.toUpperCase() === "LTC".toUpperCase()) {
            let value = range.value;
            let currency = "LTC";
            let numAfterDot = 3;
            calcDeposit(value, currency, numAfterDot);
        } else if (minValue.textContent.toUpperCase() === "ETH".toUpperCase()) {
            let value = range.value;
            let currency = "ETH";
            let numAfterDot = 2;
            calcDeposit(value, currency, numAfterDot);
        } else if (minValue.textContent.toUpperCase() === "TRX".toUpperCase()) {
            let value = range.value;
            let currency = "TRX";
            let numAfterDot = 2;
            calcDeposit(value, currency, numAfterDot);
        } else if (minValue.textContent.toUpperCase() === "ADA".toUpperCase()) {
            let value = range.value;
            let currency = "ADA";
            let numAfterDot = 1;
            calcDeposit(value, currency, numAfterDot);
        } else if (minValue.textContent.toUpperCase() === "BNB".toUpperCase()) {
            let value = range.value;
            let currency = "BNB";
            let numAfterDot = 3;
            calcDeposit(value, currency, numAfterDot);
        } else if (minValue.textContent.toUpperCase() === "BCH".toUpperCase()) {
            let value = range.value;
            let currency = "BCH";
            let numAfterDot = 3;
            calcDeposit(value, currency, numAfterDot);
        } else if (minValue.textContent.toUpperCase() === "USDC".toUpperCase()) {
            let value = range.value;
            let currency = "USDC";
            let numAfterDot = 3;
            calcDeposit(value, currency, numAfterDot);
        } else {
            alert("Валюта пока что не добавленная :/");
        }
        changeMinMax(currency);
    });
    
    inputValue.oninput = (() => {
        let value = inputValue.value;
        range.value = `${value}`;
    
        valPercent = ((range.value - 50) / (range.max - 50)) * 100;
        range.style.background = `linear-gradient(to right, #A2EC48 ${valPercent}%, #E4EEF5 ${valPercent}%)`;

        myChart.data.datasets[0].data[0] = range.value;
        myChart.update();

        let currencyParrent = document.getElementById('choosen-currency');
        let currency = currencyParrent.querySelector('.currency').textContent;
    
        let minValueParrent = document.getElementById("min-count-value"); 
        let minValue = minValueParrent.querySelector(".currency"); 
        if (minValue.textContent.toUpperCase() === "BTC".toUpperCase()) {
            let value = range.value;
            let currency = "BTC";
            let numAfterDot = 4;
            calcDeposit(value, currency, numAfterDot);
        } else if (minValue.textContent.toUpperCase() === "USD".toUpperCase()) {
            let value = range.value;
            let currency = "USD";
            let numAfterDot = 2;
            calcDeposit(value, currency, numAfterDot);
        } else if (minValue.textContent.toUpperCase() === "LTC".toUpperCase()) {
            let value = range.value;
            let currency = "LTC";
            let numAfterDot = 3;
            calcDeposit(value, currency, numAfterDot);
        } else if (minValue.textContent.toUpperCase() === "ETH".toUpperCase()) {
            let value = range.value;
            let currency = "ETH";
            let numAfterDot = 2;
            calcDeposit(value, currency, numAfterDot);
        } else if (minValue.textContent.toUpperCase() === "TRX".toUpperCase()) {
            let value = range.value;
            let currency = "TRX";
            let numAfterDot = 2;
            calcDeposit(value, currency, numAfterDot);
        } else if (minValue.textContent.toUpperCase() === "ADA".toUpperCase()) {
            let value = range.value;
            let currency = "ADA";
            let numAfterDot = 1;
            calcDeposit(value, currency, numAfterDot);
        } else if (minValue.textContent.toUpperCase() === "BNB".toUpperCase()) {
            let value = range.value;
            let currency = "BNB";
            let numAfterDot = 3;
            calcDeposit(value, currency, numAfterDot);
        } else if (minValue.textContent.toUpperCase() === "BCH".toUpperCase()) {
            let value = range.value;
            let currency = "BCH";
            let numAfterDot = 3;
            calcDeposit(value, currency, numAfterDot);
        } else if (minValue.textContent.toUpperCase() === "USDC".toUpperCase()) {
            let value = range.value;
            let currency = "USDC";
            let numAfterDot = 3;
            calcDeposit(value, currency, numAfterDot);
        } else {
            alert("Валюта пока что не добавленная :/");
        }
        changeMinMax(currency);

        valPercent = ((range.value - range.min) / (range.max - range.min)) * 100;
        range.style.background = `linear-gradient(to right, #A2EC48 ${valPercent}%, #E4EEF5 ${valPercent}%)`;    
    });
    
    changeCurrency(response);
    editMinMax();
});

function changeCurrency(parrent) {
    changeSelectedCurrency(parrent);
}

let changeSelectedCurrency = function (rate) {
    let calcCurrencyParrent = document.querySelector(".calculator__currency");
    let calcCurrencyItems = calcCurrencyParrent.querySelectorAll('.select__item');

    calcCurrencyItems.forEach(item => {
        item.addEventListener('click', (e) => {
            let currencyParrent = document.getElementById('choosen-currency');
            let currency = currencyParrent.querySelector('.currency').textContent;
            changeMinMax(currency);

            let minValueParrent = document.getElementById("min-count-value"); 
            let minValue = minValueParrent.querySelector(".currency"); 
            if (minValue.textContent.toUpperCase() === "BTC".toUpperCase()) {
                bitcoinRate = rate.bitcoin.usd;
                let step = 0.0002;
                let fixedAfterDot = 4;
                changeMinMaxValue(bitcoinRate, step, fixedAfterDot);
            } else if (minValue.textContent.toUpperCase() === "USD".toUpperCase()) {
                let dollarRate = 1;
                let step = 5;
                let fixedAfterDot = 0;
                changeMinMaxValue(dollarRate, step, fixedAfterDot);
            } else if (minValue.textContent.toUpperCase() === "LTC".toUpperCase()) {
                ltcRate = rate.litecoin.usd;
                let step = 0.01;
                let fixedAfterDot = 2;
                changeMinMaxValue(ltcRate, step, fixedAfterDot);
            } else if (minValue.textContent.toUpperCase() === "ETH".toUpperCase()) {
                ethRate = rate.ethereum.usd;
                let step = 0.01;
                let fixedAfterDot = 2;
                changeMinMaxValue(ethRate, step, fixedAfterDot);
            } else if (minValue.textContent.toUpperCase() === "TRX".toUpperCase()) {
                trxRate = rate.tron.usd;
                let step = 0.01;
                let fixedAfterDot = 2;
                changeMinMaxValue(trxRate, step, fixedAfterDot);
            } else if (minValue.textContent.toUpperCase() === "ADA".toUpperCase()) {
                adaRate = rate.cardano.usd;
                let step = 0.01;
                let fixedAfterDot = 1;
                changeMinMaxValue(adaRate, step, fixedAfterDot);
            } else if (minValue.textContent.toUpperCase() === "BNB".toUpperCase()) {
                bnbRate = rate.binancecoin.usd;
                let step = 0.01;
                let fixedAfterDot = 2;
                changeMinMaxValue(bnbRate, step, fixedAfterDot);
            } else if (minValue.textContent.toUpperCase() === "BCH".toUpperCase()) {
                bchRate = rate["bitcoin-cash"].usd;
                let step = 0.01;
                let fixedAfterDot = 2;
                changeMinMaxValue(bchRate, step, fixedAfterDot);
            } else if (minValue.textContent.toUpperCase() === "USDC".toUpperCase()) {
                usdcRate = rate["usd-coin"].usd;
                let step = 0.01;
                let fixedAfterDot = 2;
                changeMinMaxValue(usdcRate, step, fixedAfterDot);
            } else {
                alert("Валюта пока что не добавленная :/");
            }
        })
    });
};

function changeMinMax(currency) {
    let minValue = document.getElementById("min-count-value"); 
    let maxValue = document.getElementById("max-count-value"); 
    minValue.querySelector(".currency").textContent = `${currency}`;
    maxValue.querySelector(".currency").textContent = `${currency}`;
}
function changeMinMaxValue(curentCurrency, step, fixedAfterDot) {
    let minValue = document.getElementById("min-count-value"); 
    let maxValue = document.getElementById("max-count-value"); 
    let minValueValue = minValue.querySelector(".value");
    let maxValueValue = maxValue.querySelector(".value");
    minValueValue.textContent = `${(minValueSummar / curentCurrency).toFixed(fixedAfterDot)}`;
    maxValueValue.textContent = `${(maxValueSummar / curentCurrency).toFixed(fixedAfterDot)}`;

    inputValue.value = `${(minValueSummar / curentCurrency).toFixed(fixedAfterDot)}`;
    range.min = `${(minValueSummar / curentCurrency).toFixed(fixedAfterDot)}`;
    range.max = `${(maxValueSummar / curentCurrency).toFixed(fixedAfterDot)}`;
    range.step = step;

    valPercent = ((range.value - range.min) / (range.max - range.min)) * 100;
    range.style.background = `linear-gradient(to right, #A2EC48 ${valPercent}%, #E4EEF5 ${valPercent}%)`;
}



//window.addEventListener("load", editMinMax());

function editMinMax() {

    let currentTariffParrent = document.querySelector(".tabs-list");
    let currentTarif = currentTariffParrent.querySelector(".navigation-bar__point_active");
    let tarifCurrency = currentTarif.querySelector(".navigation-bar__text");

    if (tarifCurrency.textContent.toUpperCase() === "Bitcoin".toUpperCase()) {
        console.log("bitcoin current");
    }
}