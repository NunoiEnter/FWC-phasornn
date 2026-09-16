$(function () {
  function isNonNegativeInteger(value) {
    return /^\d+$/.test(value);
  }

  function calculate(left, operator, right) {
    if (operator === '+') return left + right;
    if (operator === '-') return left - right;
    if (operator === '*') return left * right;
    if (operator === '/') return left / right;
    return left % right;
  }

  $('#calculator-form').on('submit', function (event) {
    event.preventDefault();

    const leftValue = $('#left-number').val();
    const rightValue = $('#right-number').val();
    const operator = $('#operator').val();

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

    if ((operator === '/' || operator === '%') && right === 0) {
      alert("It's over 9000!");
      return;
    }

    const result = calculate(left, operator, right);
    console.log(result);
    alert(result);
  });

  setInterval(function () {
    alert('Please, use me...');
  }, 30000);
});
