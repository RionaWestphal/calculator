let display = document.querySelector(".display");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let equals = document.querySelector('.equals');
let clear = document.querySelector('.clear');
let shouldClearDisplay = false;
let displayValue = "";
let mostRecentOperator = undefined;
let num1 = 0;

for (const number of numbers) {
    number.addEventListener('click', function handleClick(e) {
        if (shouldClearDisplay === true) {
            displayValue = "";
            shouldClearDisplay = false;
        }
        displayValue += e.srcElement.innerText;
        fillDisplay(displayValue);
    });
}

for (const operator of operators) {
    operator.addEventListener('click', function handleClick(e) {
        if (num1 === 0) {
            mostRecentOperator = e.srcElement.innerText;
            num1 = displayValue;
            displayValue = "";
        }
        else {
            if(displayValue === "") {
                mostRecentOperator = e.srcElement.innerText;
                return;
            }
            let answer = operate(mostRecentOperator, num1, displayValue);
            if (typeof (answer) === "number" && !Number.isSafeInteger(answer)) {
                fillDisplay(answer.toPrecision(8));
            }
            else {
                fillDisplay(answer);
            }
            displayValue = "";
            num1 = answer;
            mostRecentOperator = e.srcElement.innerText;
            //shouldClearDisplay = true;
        }
    });
}

equals.addEventListener('click', function handleClick(e) {
    if (mostRecentOperator === undefined || displayValue === "") return;
    let answer = operate(mostRecentOperator, num1, displayValue);
    if (typeof (answer) === "number" && !Number.isSafeInteger(answer)) {
        fillDisplay(answer.toPrecision(8));
    }
    else {
        fillDisplay(answer);
    }
    displayValue = answer;
    num1 = 0;
    shouldClearDisplay = true;
    mostRecentOperator = undefined;
});

clear.addEventListener('click', function handleClick(e) {
    clearDisplay();
    num1 = 0;
    displayValue = "";
});

function add(x, y) {
    return parseFloat(x) + parseFloat(y);
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === "0") {
        console.log("bad");
        return ":(";
    }
    return x / y;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case ("+"): return add(num1, num2); break;
        case ("-"): return subtract(num1, num2); break;
        case ("*"): return multiply(num1, num2); break;
        case ("/"): return divide(num1, num2); break;
    }
}

function fillDisplay(text) {
    display.textContent = text;
}

function clearDisplay() {
    display.textContent = "";
}