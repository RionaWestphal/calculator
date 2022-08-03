let display = document.querySelector(".display");
let numbers = document.querySelectorAll(".number");
let displayValue;

for (const number of numbers) {
    number.addEventListener('click', function handleClick(e) {
      fillDisplay(e.srcElement.innerText);
    });
  }

function add(x,y) {
    return x + y;
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
        case("+"): return num1 + num2; break;
        case("-"): return num1 - num2; break;
        case("*"): return num1 * num2; break;
        case("/"): return num1 / num2; break;
    }
}

function fillDisplay(text) {
    let content = document.createTextNode(text);
    display.appendChild(content);
}

function clearDisplay() {
    display.innerHTML = "";
}