const btnSum = document.getElementById("btnSum");
const btnSub = document.getElementById("btnSub");
const btnDiv = document.getElementById("btnDiv");
const btnMult = document.getElementById("btnMult");
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btnClear = document.getElementById("btnClear");
const btnEquals = document.getElementById("btnEquals");
const display = document.getElementById("display");
let operator = '';
let firstNumber = '';
let waitingSecondNumber = false;
let waitingFirstNumber = true;

function setOperator(nextOperator) {
    const actualValue = parseFloat(display.value);

    if (operator && waitingSecondNumber){
        operator = nextOperator;
        return;
    }

    if (firstNumber === '') {
        firstNumber = actualValue;
    } else if (operator) {
        const result = calculate(firstNumber, actualValue, operator);

        if (isNaN(result)) {
            display.value = "Error";
            return;
        }
        display.value = result.toString();
        firstNumber = result;
    }

    operator = nextOperator;
    waitingSecondNumber = true;
}

function addNumber(num) {
    if (waitingFirstNumber){
        display.value = '0';
        waitingFirstNumber = false;
    }
    if (waitingSecondNumber){
        display.value = num;
        waitingSecondNumber = false;
    } else {
        if (display.value === '0' && num !== '.'){
            display.value = num;
        } else if (num === '.' && display.value.includes('.')){
            return;
        } else {
            display.value += num;
        }
    }
}


function calculate(a, b, op) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '÷':
            if (b === 0){
                return NaN;
            }

            return a / b;
        case 'x':
            return a * b;
        default:
            return b;
    }
}

function handleEqual() {
    const actualValue = parseFloat(display.value);
    if (firstNumber !== '' && operator !== '') {
        const finalResult = calculate(firstNumber, actualValue, operator);

        if (isNaN(finalResult)){
            display.value = "Error";
        } else {
            display.value = finalResult.toString();
        }

        firstNumber = '';
        operator = '';
        waitingFirstNumber = true;
        waitingSecondNumber = false;
    }
}

function clearCalculator() {
    firstNumber = '';
    operator = '';
    waitingSecondNumber = false;
    waitingFirstNumber = false;
    display.value = '0';
}

btn0.addEventListener("click", function(){
    addNumber('0');
});

btn1.addEventListener("click", function(){
    addNumber('1');
});

btn2.addEventListener("click", function(){
    addNumber('2');
});

btn3.addEventListener("click", function(){
    addNumber('3');
});

btn4.addEventListener("click", function(){
    addNumber('4');
});

btn5.addEventListener("click", function(){
    addNumber('5');
});

btn6.addEventListener("click", function(){
    addNumber('6');
});

btn7.addEventListener("click", function(){
    addNumber('7');
});

btn8.addEventListener("click", function(){
    addNumber('8');
});

btn9.addEventListener("click", function(){
    addNumber('9');
});

btnSum.addEventListener("click", function(){
    setOperator('+');
});

btnSub.addEventListener("click", function(){
    setOperator('-');
});

btnDiv.addEventListener("click", function(){
    setOperator('÷');
});

btnMult.addEventListener("click", function(){
    setOperator('x');
});

btnEquals.addEventListener("click", handleEqual);

btnClear.addEventListener("click", clearCalculator);