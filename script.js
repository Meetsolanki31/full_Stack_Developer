function getNumbers() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  return { a, b };
}

function add() {
  let { a, b } = getNumbers();
  document.getElementById("resultBox").value = (a + b);
}

function subtract() {
  let { a, b } = getNumbers();
  document.getElementById("resultBox").value = (a - b);
}

function multiply() {
  let { a, b } = getNumbers();
  document.getElementById("resultBox").value = (a * b);
}

function divide() {
  let { a, b } = getNumbers();

  if (b === 0) {
    document.getElementById("resultBox").value = "Cannot divide by zero";
  } else {
    document.getElementById("resultBox").value = (a / b);
  }
}

function modulus() {
  let { a, b } = getNumbers();

  if (b === 0) {
    document.getElementById("resultBox").value = "Cannot divide by zero";
  } else {
    document.getElementById("resultBox").value = (a % b);
  }
}


