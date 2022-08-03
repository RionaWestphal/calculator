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