let display = document.querySelector(".display");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let equals = document.querySelector('.equals');
let clear = document.querySelector('.clear');
let displayValue = "";
let mostRecentOperator = undefined;
let num1;

for (const number of numbers) {
    number.addEventListener('click', function handleClick(e) {
      displayValue += e.srcElement.innerText;
      fillDisplay(displayValue);
    });
  }

for(const operator of operators) {
    operator.addEventListener('click', function handleClick(e) {
        mostRecentOperator = e.srcElement.innerText;
        num1 = displayValue;
        displayValue = "";
    });
}

equals.addEventListener('click', function handleClick(e) {
    if(mostRecentOperator === undefined || displayValue === "") return; 
    let answer = operate(mostRecentOperator, num1, displayValue);
    fillDisplay(answer); 
    displayValue = answer;
    num1 = 0;
});

clear.addEventListener('click', function handleClick(e) {
    clearDisplay();
    num1 = 0;
    displayValue = "";
});

function add(x,y) {
    return parseInt(x) + parseInt(y);
}

function subtract(x,y) {
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x,y) {
    return x / y;
}

function operate(operator, num1, num2) {
    switch(operator) {
        case("+"): return add(num1, num2); break;
        case("-"): return subtract(num1, num2); break;
        case("*"): return multiply(num1, num2); break;
        case("/"): return divide(num1, num2); break;
    }
}

function fillDisplay(text) {
    display.textContent = text;
}

function clearDisplay() {
    display.textContent = "";
}