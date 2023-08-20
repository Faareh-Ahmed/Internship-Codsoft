const display = document.getElementById("display");
const numButtons = document.querySelectorAll(".num-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const clearButton = document.getElementById("clear");
const calculateButton = document.getElementById("calculate");

let inputExpression = "";
let currentValue = 0;

function updateDisplay() {
    display.value = inputExpression;
}

function clearDisplay() {
    inputExpression = "";
    currentValue = 0;
    updateDisplay();
}

numButtons.forEach(button => {
    button.addEventListener("click", () => {
        inputExpression += button.textContent;
        updateDisplay();
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (inputExpression !== "") {
            inputExpression += " " + button.textContent + " ";
            updateDisplay();
        }
    });
});

calculateButton.addEventListener("click", () => {
    if (inputExpression !== "") {
        try {
            currentValue = eval(inputExpression);
            inputExpression = currentValue.toString();
            updateDisplay();
        } catch (error) {
            display.value = "Error";
        }
    }
});

clearButton.addEventListener("click", () => {
    clearDisplay();
});

