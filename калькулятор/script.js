let display = document.getElementById('display');
let currentInput = '';
let result = 0;

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function appendSymbol(symbol) {
  currentInput += symbol;
  updateDisplay();
}

function updateDisplay() {
  display.innerText = currentInput;
}

function calculateResult() {
  try {
    result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch (error) {
    display.innerText = 'Error';
  }
}
