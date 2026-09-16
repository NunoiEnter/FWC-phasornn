const form = document.getElementById('calculator-form');
const leftInput = document.getElementById('left-number');
const rightInput = document.getElementById('right-number');
const operatorInput = document.getElementById('operator');

function isNonNegativeInteger(value) {
  return /^\d+$/.test(value);
}

function calculate(left, operator, right) {
  switch (operator) {
    case '+': return left + right;
    case '-': return left - right;
    case '*': return left * right;
    case '/': return left / right;
    case '%': return left % right;
    default: return NaN;
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const leftValue = leftInput.value;
  const rightValue = rightInput.value;

  if (!isNonNegativeInteger(leftValue) || !isNonNegativeInteger(rightValue)) {
    alert('Error :(');
    return;
  }

  const left = Number(leftValue);
  const right = Number(rightValue);

  if (!Number.isSafeInteger(left) || !Number.isSafeInteger(right)) {
    alert('Error :(');
    return;
  }

  if ((operatorInput.value === '/' || operatorInput.value === '%') && right === 0) {
    alert("It's over 9000!");
    return;
  }

  const result = calculate(left, operatorInput.value, right);
  console.log(result);
  alert(result);
});

setInterval(() => {
  alert('Please, use me...');
}, 30000);
