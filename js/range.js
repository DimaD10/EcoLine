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
    editMinMax(response);
    checkCurrentTarif(response);

    const stepList = document.querySelectorAll(".navigation-bar__point");
    const contentList = document.querySelectorAll(".about-content__section");

    window.addEventListener('load', (e) => {
        contentList.forEach(el => {
            el.classList.remove('about-content__section_showed');
        });
        contentList[0].classList.add('about-content__section_showed');
    });
    window.addEventListener('click', (e) => {
        if(!e.target.classList.contains("navigation-bar__point_active") && e.target.classList.contains('navigation-bar__point')) {
            stepList.forEach(el => {
                el.classList.remove("navigation-bar__point_active");
            });
            e.target.classList.add("navigation-bar__point_active");
            
            var points = [...document.querySelectorAll('.navigation-bar__point')]
            var elPos = points.indexOf(e.target);
            contentList.forEach(el => {
                el.classList.remove('about-content__section_showed');
            });
            contentList[elPos].classList.add('about-content__section_showed');

            checkCurrentTarif(response);
        };
    });
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
                const stepList = document.querySelectorAll(".navigation-bar__point");
                const contentList = document.querySelectorAll(".about-content__section");

                let navPoint = document.getElementById('BTC-tarif');
                stepList.forEach(el => {
                    el.classList.remove("navigation-bar__point_active");
                });
                navPoint.classList.add("navigation-bar__point_active");
                var points = [...document.querySelectorAll('.navigation-bar__point')]
                var elPos = points.indexOf(navPoint);
                contentList.forEach(el => {
                    el.classList.remove('about-content__section_showed');
                });
                contentList[elPos].classList.add('about-content__section_showed');

                checkCurrentTarif(rate);
                changeMinMaxValue();
            } else if (minValue.textContent.toUpperCase() === "USD".toUpperCase()) {
                const stepList = document.querySelectorAll(".navigation-bar__point");
                const contentList = document.querySelectorAll(".about-content__section");

                let navPoint = document.getElementById('USD-tarif');
                stepList.forEach(el => {
                    el.classList.remove("navigation-bar__point_active");
                });
                navPoint.classList.add("navigation-bar__point_active");
                var points = [...document.querySelectorAll('.navigation-bar__point')]
                var elPos = points.indexOf(navPoint);
                contentList.forEach(el => {
                    el.classList.remove('about-content__section_showed');
                });
                contentList[elPos].classList.add('about-content__section_showed');

                checkCurrentTarif(rate);
                changeMinMaxValue();
            } else if (minValue.textContent.toUpperCase() === "LTC".toUpperCase()) {
                const stepList = document.querySelectorAll(".navigation-bar__point");
                const contentList = document.querySelectorAll(".about-content__section");

                let navPoint = document.getElementById('LTC-tarif');
                stepList.forEach(el => {
                    el.classList.remove("navigation-bar__point_active");
                });
                navPoint.classList.add("navigation-bar__point_active");
                var points = [...document.querySelectorAll('.navigation-bar__point')]
                var elPos = points.indexOf(navPoint);
                contentList.forEach(el => {
                    el.classList.remove('about-content__section_showed');
                });
                contentList[elPos].classList.add('about-content__section_showed');

                checkCurrentTarif(rate);
                changeMinMaxValue();
            } else if (minValue.textContent.toUpperCase() === "ETH".toUpperCase()) {
                const stepList = document.querySelectorAll(".navigation-bar__point");
                const contentList = document.querySelectorAll(".about-content__section");

                let navPoint = document.getElementById('ETH-tarif');
                stepList.forEach(el => {
                    el.classList.remove("navigation-bar__point_active");
                });
                navPoint.classList.add("navigation-bar__point_active");
                var points = [...document.querySelectorAll('.navigation-bar__point')]
                var elPos = points.indexOf(navPoint);
                contentList.forEach(el => {
                    el.classList.remove('about-content__section_showed');
                });
                contentList[elPos].classList.add('about-content__section_showed');

                checkCurrentTarif(rate);
                changeMinMaxValue();
            } else if (minValue.textContent.toUpperCase() === "TRX".toUpperCase()) {
                const stepList = document.querySelectorAll(".navigation-bar__point");
                const contentList = document.querySelectorAll(".about-content__section");

                let navPoint = document.getElementById('TRX-tarif');
                stepList.forEach(el => {
                    el.classList.remove("navigation-bar__point_active");
                });
                navPoint.classList.add("navigation-bar__point_active");
                var points = [...document.querySelectorAll('.navigation-bar__point')]
                var elPos = points.indexOf(navPoint);
                contentList.forEach(el => {
                    el.classList.remove('about-content__section_showed');
                });
                contentList[elPos].classList.add('about-content__section_showed');

                checkCurrentTarif(rate);
                changeMinMaxValue();
            } else if (minValue.textContent.toUpperCase() === "ADA".toUpperCase()) {
                const stepList = document.querySelectorAll(".navigation-bar__point");
                const contentList = document.querySelectorAll(".about-content__section");

                let navPoint = document.getElementById('ADA-tarif');
                stepList.forEach(el => {
                    el.classList.remove("navigation-bar__point_active");
                });
                navPoint.classList.add("navigation-bar__point_active");
                var points = [...document.querySelectorAll('.navigation-bar__point')]
                var elPos = points.indexOf(navPoint);
                contentList.forEach(el => {
                    el.classList.remove('about-content__section_showed');
                });
                contentList[elPos].classList.add('about-content__section_showed');

                checkCurrentTarif(rate);
                changeMinMaxValue();
            } else if (minValue.textContent.toUpperCase() === "BNB".toUpperCase()) {
                const stepList = document.querySelectorAll(".navigation-bar__point");
                const contentList = document.querySelectorAll(".about-content__section");

                let navPoint = document.getElementById('BNB-tarif');
                stepList.forEach(el => {
                    el.classList.remove("navigation-bar__point_active");
                });
                navPoint.classList.add("navigation-bar__point_active");
                var points = [...document.querySelectorAll('.navigation-bar__point')]
                var elPos = points.indexOf(navPoint);
                contentList.forEach(el => {
                    el.classList.remove('about-content__section_showed');
                });
                contentList[elPos].classList.add('about-content__section_showed');

                checkCurrentTarif(rate);
                changeMinMaxValue();
            } else if (minValue.textContent.toUpperCase() === "BCH".toUpperCase()) {
                const stepList = document.querySelectorAll(".navigation-bar__point");
                const contentList = document.querySelectorAll(".about-content__section");

                let navPoint = document.getElementById('BCH-tarif');
                stepList.forEach(el => {
                    el.classList.remove("navigation-bar__point_active");
                });
                navPoint.classList.add("navigation-bar__point_active");
                var points = [...document.querySelectorAll('.navigation-bar__point')]
                var elPos = points.indexOf(navPoint);
                contentList.forEach(el => {
                    el.classList.remove('about-content__section_showed');
                });
                contentList[elPos].classList.add('about-content__section_showed');

                checkCurrentTarif(rate);
                changeMinMaxValue();
            } else if (minValue.textContent.toUpperCase() === "USDC".toUpperCase()) {
                const stepList = document.querySelectorAll(".navigation-bar__point");
                const contentList = document.querySelectorAll(".about-content__section");

                let navPoint = document.getElementById('usdc-tarif');
                stepList.forEach(el => {
                    el.classList.remove("navigation-bar__point_active");
                });
                navPoint.classList.add("navigation-bar__point_active");
                var points = [...document.querySelectorAll('.navigation-bar__point')]
                var elPos = points.indexOf(navPoint);
                contentList.forEach(el => {
                    el.classList.remove('about-content__section_showed');
                });
                contentList[elPos].classList.add('about-content__section_showed');

                checkCurrentTarif(rate);
                changeMinMaxValue();
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
function changeMinMaxValue() {
    valPercent = ((range.value - range.min) / (range.max - range.min)) * 100;
    range.style.background = `linear-gradient(to right, #A2EC48 ${valPercent}%, #E4EEF5 ${valPercent}%)`;
}

function editMinMax(course) {
    const tarifList = document.querySelectorAll(".navigation-bar__text");

    tarifList.forEach(item => {
        if (item.textContent.toUpperCase() === "Bitcoin".toUpperCase()) {
            let valueParrent = item.closest(".navigation-bar__point");
            let minValue = valueParrent.querySelector(".crypto-dep-min");
            let maxValue = valueParrent.querySelector(".crypto-dep-max");
            let currency = "BTC";
            let numAfterDot = 5;
            let step = 0.00001;

            minValue.textContent = `${(minValue.textContent / course.bitcoin.usd).toFixed(numAfterDot)}`;
            maxValue.textContent = `${(maxValue.textContent / course.bitcoin.usd).toFixed(numAfterDot)}`;

            valueParrent.querySelectorAll(".crypto-course__currency").forEach(el => {
                el.textContent = currency;
            });

            //editCalcMinMax(minValue.textContent, maxValue.textContent, step);
        } else if (item.textContent.toUpperCase() === "Bitcoin cash".toUpperCase()) {
            let valueParrent = item.closest(".navigation-bar__point");
            let minValue = valueParrent.querySelector(".crypto-dep-min");
            let maxValue = valueParrent.querySelector(".crypto-dep-max");
            let currency = "BCH";
            let numAfterDot = 5;

            minValue.textContent = `${(minValue.textContent / course["bitcoin-cash"].usd).toFixed(numAfterDot)}`;
            maxValue.textContent = `${(maxValue.textContent / course["bitcoin-cash"].usd).toFixed(numAfterDot)}`;

            valueParrent.querySelectorAll(".crypto-course__currency").forEach(el => {
                el.textContent = currency;
            });
        } else if (item.textContent.toUpperCase() === "Binance Coin".toUpperCase()) {
            let valueParrent = item.closest(".navigation-bar__point");
            let minValue = valueParrent.querySelector(".crypto-dep-min");
            let maxValue = valueParrent.querySelector(".crypto-dep-max");
            let currency = "BNB";
            let numAfterDot = 5;

            minValue.textContent = `${(minValue.textContent / course.binancecoin.usd).toFixed(numAfterDot)}`;
            maxValue.textContent = `${(maxValue.textContent / course.binancecoin.usd).toFixed(numAfterDot)}`;

            valueParrent.querySelectorAll(".crypto-course__currency").forEach(el => {
                el.textContent = currency;
            });
        } else if (item.textContent.toUpperCase() === "Tether (BEP20)".toUpperCase()) {
            console.log("Tether (BEP20)");
        } else if (item.textContent.toUpperCase() === "Tether (ERC20)".toUpperCase()) {
            console.log("Tether (ERC20)");
        } else if (item.textContent.toUpperCase() === "Tether (TRC20)".toUpperCase()) {
            console.log("Tether (TRC20)");
        } else if (item.textContent.toUpperCase() === "Ethereum".toUpperCase()) {
            let valueParrent = item.closest(".navigation-bar__point");
            let minValue = valueParrent.querySelector(".crypto-dep-min");
            let maxValue = valueParrent.querySelector(".crypto-dep-max");
            let currency = "ETH";
            let numAfterDot = 5;

            minValue.textContent = `${(minValue.textContent / course.ethereum.usd).toFixed(numAfterDot)}`;
            maxValue.textContent = `${(maxValue.textContent / course.ethereum.usd).toFixed(numAfterDot)}`;

            valueParrent.querySelectorAll(".crypto-course__currency").forEach(el => {
                el.textContent = currency;
            });
        } else if (item.textContent.toUpperCase() === "Litecoin".toUpperCase()) {
            let valueParrent = item.closest(".navigation-bar__point");
            let minValue = valueParrent.querySelector(".crypto-dep-min");
            let maxValue = valueParrent.querySelector(".crypto-dep-max");
            let currency = "LTC";
            let numAfterDot = 3;

            minValue.textContent = `${(minValue.textContent / course.litecoin.usd).toFixed(numAfterDot)}`;
            maxValue.textContent = `${(maxValue.textContent / course.litecoin.usd).toFixed(numAfterDot)}`;

            valueParrent.querySelectorAll(".crypto-course__currency").forEach(el => {
                el.textContent = currency;
            });
        } else if (item.textContent.toUpperCase() === "Tron".toUpperCase()) {
            let valueParrent = item.closest(".navigation-bar__point");
            let minValue = valueParrent.querySelector(".crypto-dep-min");
            let maxValue = valueParrent.querySelector(".crypto-dep-max");
            let currency = "TRX";
            let numAfterDot = 2;

            minValue.textContent = `${(minValue.textContent / course.tron.usd).toFixed(numAfterDot)}`;
            maxValue.textContent = `${(maxValue.textContent / course.tron.usd).toFixed(numAfterDot)}`;

            valueParrent.querySelectorAll(".crypto-course__currency").forEach(el => {
                el.textContent = currency;
            });
        } else if (item.textContent.toUpperCase() === "USD coin".toUpperCase()) {
            let valueParrent = item.closest(".navigation-bar__point");
            let minValue = valueParrent.querySelector(".crypto-dep-min");
            let maxValue = valueParrent.querySelector(".crypto-dep-max");
            let currency = "USDC";
            let numAfterDot = 2;

            minValue.textContent = `${(minValue.textContent / course["usd-coin"].usd).toFixed(numAfterDot)}`;
            maxValue.textContent = `${(maxValue.textContent / course["usd-coin"].usd).toFixed(numAfterDot)}`;

            valueParrent.querySelectorAll(".crypto-course__currency").forEach(el => {
                el.textContent = currency;
            });
        } else if (item.textContent.toUpperCase() === "Cardano".toUpperCase()) {
            let valueParrent = item.closest(".navigation-bar__point");
            let minValue = valueParrent.querySelector(".crypto-dep-min");
            let maxValue = valueParrent.querySelector(".crypto-dep-max");
            let currency = "ada";
            let numAfterDot = 2;

            minValue.textContent = `${(minValue.textContent / course.cardano.usd).toFixed(numAfterDot)}`;
            maxValue.textContent = `${(maxValue.textContent / course.cardano.usd).toFixed(numAfterDot)}`;

            valueParrent.querySelectorAll(".crypto-course__currency").forEach(el => {
                el.textContent = currency;
            });
        } else if (item.textContent.toUpperCase() === "USD".toUpperCase()) {
            let valueParrent = item.closest(".navigation-bar__point");
            let minValue = valueParrent.querySelector(".crypto-dep-min");
            let maxValue = valueParrent.querySelector(".crypto-dep-max");
            let currency = "usd";
            let numAfterDot = 0;

            minValue.textContent = `${(minValue.textContent / 1).toFixed(numAfterDot)}`;
            maxValue.textContent = `${(maxValue.textContent / 1).toFixed(numAfterDot)}`;

            valueParrent.querySelectorAll(".crypto-course__currency").forEach(el => {
                el.textContent = currency;
            });
        } else {
            alert("Валюта не найдена.")
        }
    });
}
function editCalcMinMax(minV, maxV, step) {
    let minRangeValueParrent = document.getElementById("min-count-value");
    let minRangeValue = minRangeValueParrent.querySelector(".value");
    let maxRangeValueParrent = document.getElementById("max-count-value"); 
    let maxRangeValue = maxRangeValueParrent.querySelector(".value");

    minRangeValue.textContent = minV;
    maxRangeValue.textContent = maxV;

    inputValue.value = minV;
    range.min = minV;
    range.max = maxV;

    range.step = step;
}

function checkCurrentTarif(rating) {
    let currentTariffParrent = document.querySelector(".tabs-list");
    let currentTarif = currentTariffParrent.querySelector(".navigation-bar__point_active");
    let tarifCurrency = currentTarif.querySelector(".navigation-bar__text");
    
    if (tarifCurrency.textContent.toUpperCase() === "Bitcoin".toUpperCase()) {
        currency = "BTC";
        selectChoose(currency);
        changeMinMax(currency);

        bitcoinRate = rating.bitcoin.usd;
        let step = 0.00001;
        let fixedAfterDot = 4;
        changeMinMaxValue(bitcoinRate, step, fixedAfterDot);

        let valueParrent = document.querySelector(".navigation-bar__point_active");
        let minValue = valueParrent.querySelector(".crypto-dep-min");
        let maxValue = valueParrent.querySelector(".crypto-dep-max");

        var points = [...document.querySelectorAll('.navigation-bar__point')];
        let currentBlock = document.getElementById('BTC-tarif');
        var elPos = points.indexOf(currentBlock);
        duplicateMinMaxValues(currency, minValue, maxValue, elPos)

        editCalcMinMax(minValue.textContent, maxValue.textContent, step);

        valPercent = ((range.value - range.min) / (range.max - range.min)) * 100;
        range.style.background = `linear-gradient(to right, #A2EC48 ${valPercent}%, #E4EEF5 ${valPercent}%)`;    
    } else if (tarifCurrency.textContent.toUpperCase() === "Bitcoin cash".toUpperCase()) {
        currency = "BCH";
        selectChoose(currency);
        changeMinMax(currency);

        bchRate = rating["bitcoin-cash"].usd;
        let step = 0.00001;
        let fixedAfterDot = 2;
        changeMinMaxValue(bchRate, step, fixedAfterDot);

        let valueParrent = document.querySelector(".navigation-bar__point_active");
        let minValue = valueParrent.querySelector(".crypto-dep-min");
        let maxValue = valueParrent.querySelector(".crypto-dep-max");

        var points = [...document.querySelectorAll('.navigation-bar__point')];
        let currentBlock = document.getElementById('BCH-tarif');
        var elPos = points.indexOf(currentBlock);
        duplicateMinMaxValues(currency, minValue, maxValue, elPos)

        editCalcMinMax(minValue.textContent, maxValue.textContent, step);
        
        valPercent = ((range.value - range.min) / (range.max - range.min)) * 100;
        range.style.background = `linear-gradient(to right, #A2EC48 ${valPercent}%, #E4EEF5 ${valPercent}%)`;    
    } else if (tarifCurrency.textContent.toUpperCase() === "Binance Coin".toUpperCase()) {
        currency = "BNB";
        selectChoose(currency);
        changeMinMax(currency);

        bnbRate = rating.binancecoin.usd;
        let step = 0.00001;
        let fixedAfterDot = 2;
        changeMinMaxValue(bnbRate, step, fixedAfterDot);

        let valueParrent = document.querySelector(".navigation-bar__point_active");
        let minValue = valueParrent.querySelector(".crypto-dep-min");
        let maxValue = valueParrent.querySelector(".crypto-dep-max");

        var points = [...document.querySelectorAll('.navigation-bar__point')];
        let currentBlock = document.getElementById('BNB-tarif');
        var elPos = points.indexOf(currentBlock);
        duplicateMinMaxValues(currency, minValue, maxValue, elPos)

        editCalcMinMax(minValue.textContent, maxValue.textContent, step);

        valPercent = ((range.value - range.min) / (range.max - range.min)) * 100;
        range.style.background = `linear-gradient(to right, #A2EC48 ${valPercent}%, #E4EEF5 ${valPercent}%)`;    
    } else if (tarifCurrency.textContent.toUpperCase() === "Tether (BEP20)".toUpperCase()) {
        alert("Этот тариф еще не добавлен(");
    } else if (tarifCurrency.textContent.toUpperCase() === "Tether (ERC20)".toUpperCase()) {
        alert("Этот тариф еще не добавлен(");
    } else if (tarifCurrency.textContent.toUpperCase() === "Tether (TRC20)".toUpperCase()) {
        alert("Этот тариф еще не добавлен(");
    } else if (tarifCurrency.textContent.toUpperCase() === "Ethereum".toUpperCase()) {
        currency = "Eth";
        selectChoose(currency);
        changeMinMax(currency);

        ethRate = rating.ethereum.usd;
        let step = 0.01;
        let fixedAfterDot = 2;
        changeMinMaxValue(ethRate, step, fixedAfterDot);

        let valueParrent = document.querySelector(".navigation-bar__point_active");
        let minValue = valueParrent.querySelector(".crypto-dep-min");
        let maxValue = valueParrent.querySelector(".crypto-dep-max");

        var points = [...document.querySelectorAll('.navigation-bar__point')];
        let currentBlock = document.getElementById('ETH-tarif');
        var elPos = points.indexOf(currentBlock);
        duplicateMinMaxValues(currency, minValue, maxValue, elPos)

        editCalcMinMax(minValue.textContent, maxValue.textContent, step);

        valPercent = ((range.value - range.min) / (range.max - range.min)) * 100;
        range.style.background = `linear-gradient(to right, #A2EC48 ${valPercent}%, #E4EEF5 ${valPercent}%)`;    
    } else if (tarifCurrency.textContent.toUpperCase() === "Litecoin".toUpperCase()) {
        currency = "LTC";
        selectChoose(currency);
        changeMinMax(currency);

        ltcRate = rating.litecoin.usd;
        let step = 0.01;
        let fixedAfterDot = 2;
        changeMinMaxValue(ltcRate, step, fixedAfterDot);

        let valueParrent = document.querySelector(".navigation-bar__point_active");
        let minValue = valueParrent.querySelector(".crypto-dep-min");
        let maxValue = valueParrent.querySelector(".crypto-dep-max");

        var points = [...document.querySelectorAll('.navigation-bar__point')];
        let currentBlock = document.getElementById('LTC-tarif');
        var elPos = points.indexOf(currentBlock);
        duplicateMinMaxValues(currency, minValue, maxValue, elPos)

        editCalcMinMax(minValue.textContent, maxValue.textContent, step);

        valPercent = ((range.value - range.min) / (range.max - range.min)) * 100;
        range.style.background = `linear-gradient(to right, #A2EC48 ${valPercent}%, #E4EEF5 ${valPercent}%)`;    
    } else if (tarifCurrency.textContent.toUpperCase() === "Tron".toUpperCase()) {
        currency = "TRX";
        selectChoose(currency);
        changeMinMax(currency);

        trxRate = rating.tron.usd;
        let step = 0.01;
        let fixedAfterDot = 2;
        changeMinMaxValue(trxRate, step, fixedAfterDot);

        let valueParrent = document.querySelector(".navigation-bar__point_active");
        let minValue = valueParrent.querySelector(".crypto-dep-min");
        let maxValue = valueParrent.querySelector(".crypto-dep-max");

        var points = [...document.querySelectorAll('.navigation-bar__point')];
        let currentBlock = document.getElementById('TRX-tarif');
        var elPos = points.indexOf(currentBlock);
        duplicateMinMaxValues(currency, minValue, maxValue, elPos)

        editCalcMinMax(minValue.textContent, maxValue.textContent, step);
        
        valPercent = ((range.value - range.min) / (range.max - range.min)) * 100;
        range.style.background = `linear-gradient(to right, #A2EC48 ${valPercent}%, #E4EEF5 ${valPercent}%)`;    
    } else if (tarifCurrency.textContent.toUpperCase() === "USD coin".toUpperCase()) {
        currency = "USDC";
        selectChoose(currency);
        changeMinMax(currency);

        usdcRate = rating["usd-coin"].usd;
        let step = 0.01;
        let fixedAfterDot = 2;
        changeMinMaxValue(usdcRate, step, fixedAfterDot);

        let valueParrent = document.querySelector(".navigation-bar__point_active");
        let minValue = valueParrent.querySelector(".crypto-dep-min");
        let maxValue = valueParrent.querySelector(".crypto-dep-max");

        var points = [...document.querySelectorAll('.navigation-bar__point')];
        let currentBlock = document.getElementById('usdc-tarif');
        var elPos = points.indexOf(currentBlock);
        duplicateMinMaxValues(currency, minValue, maxValue, elPos)

        editCalcMinMax(minValue.textContent, maxValue.textContent, step);

        valPercent = ((range.value - range.min) / (range.max - range.min)) * 100;
        range.style.background = `linear-gradient(to right, #A2EC48 ${valPercent}%, #E4EEF5 ${valPercent}%)`;    
    } else if (tarifCurrency.textContent.toUpperCase() === "Cardano".toUpperCase()) {
        currency = "ada";
        selectChoose(currency);
        changeMinMax(currency);

        adaRate = rating.cardano.usd;
        let step = 0.01;
        let fixedAfterDot = 1;
        changeMinMaxValue(adaRate, step, fixedAfterDot);

        let valueParrent = document.querySelector(".navigation-bar__point_active");
        let minValue = valueParrent.querySelector(".crypto-dep-min");
        let maxValue = valueParrent.querySelector(".crypto-dep-max");

        var points = [...document.querySelectorAll('.navigation-bar__point')];
        let currentBlock = document.getElementById('ADA-tarif');
        var elPos = points.indexOf(currentBlock);
        duplicateMinMaxValues(currency, minValue, maxValue, elPos)

        editCalcMinMax(minValue.textContent, maxValue.textContent, step);

        valPercent = ((range.value - range.min) / (range.max - range.min)) * 100;
        range.style.background = `linear-gradient(to right, #A2EC48 ${valPercent}%, #E4EEF5 ${valPercent}%)`;    
    } else if (tarifCurrency.textContent.toUpperCase() === "USD".toUpperCase()) {
        currency = "USD";
        selectChoose(currency);
        changeMinMax(currency);
        
        let dollarRate = 1;
        let step = 5;
        let fixedAfterDot = 0;
        changeMinMaxValue(dollarRate, step, fixedAfterDot);

        let valueParrent = document.querySelector(".navigation-bar__point_active");
        let minValue = valueParrent.querySelector(".crypto-dep-min");
        let maxValue = valueParrent.querySelector(".crypto-dep-max");

        var points = [...document.querySelectorAll('.navigation-bar__point')];
        let currentBlock = document.getElementById('USD-tarif');
        var elPos = points.indexOf(currentBlock);
        duplicateMinMaxValues(currency, minValue, maxValue, elPos)

        editCalcMinMax(minValue.textContent, maxValue.textContent, step);

        valPercent = ((range.value - range.min) / (range.max - range.min)) * 100;
        range.style.background = `linear-gradient(to right, #A2EC48 ${valPercent}%, #E4EEF5 ${valPercent}%)`;    
    } else {
        alert("Error");
    }

    function selectChoose(myCurrency) {
        let selectedCurrency = document.getElementById('choosen-currency').querySelector('.currency');
        selectedCurrency.textContent = myCurrency.toUpperCase();
    }
}

function duplicateMinMaxValues(currency, minRV, maxRV, index) {
    const contentList = document.querySelectorAll(".about-content__section");

    let minBlock = contentList[index].querySelector('.min-tarif-dep');
    let maxBlock = contentList[index].querySelector('.max-tarif-dep');

    minBlock.textContent = `${minRV.textContent} ${currency}`;
    maxBlock.textContent = `${maxRV.textContent} ${currency}`;
}