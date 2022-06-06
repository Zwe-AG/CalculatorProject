let btn = document.getElementById("btnCalculate");
let result = document.getElementById("result");
let numOneError = document.getElementById("numOneError");
let numTwoError = document.getElementById("numTwoError");
let operatorError = document.getElementById("operatorError");
let finalResult;
let numOneStatus,
  numTwoStatus,
  operatorStatus = false; //ok false
numOneError.style.display = "none";
numTwoError.style.display = "none";
operatorError.style.display = "none";

btn.addEventListener("click", function calculatedFunction() {
  let num1 = document.getElementById("firstNumber");
  let num2 = document.getElementById("secondNumber");
  let operator = document.getElementById("operation");
  checkValidation(num1, num2, operator);
  if (!numOneStatus && !numOneStatus && !operatorStatus) {
    num1 = parseInt(num1.value);
    num2 = parseInt(num2.value);
    switch (operator.value) {
      case "add":
        finalResult = num1 + num2;
        break;
      case "minus":
        finalResult = num1 - num2;
        break;
      case "multiply":
        finalResult = num1 * num2;
        break;
      case "division":
        finalResult = num1 / num2;
        break;
      default:
        console.log("Operation Error");
        break;
    }
    //   console.log(finalResult);
    result.innerHTML = finalResult;
  }
});

function checkValidation(num1, num2, operator) {
  if (num1.value == "" || num1.value == null || num1.value == undefined) {
    numOneError.style.display = "block";
    numOneStatus = true;
  } else {
    numOneError.style.display = "none";
    numOneStatus = false;
  }
  if (num2.value == "" || num2.value == null || num2.value == undefined) {
    numTwoError.style.display = "block";
    numTwoStatus = true;
  } else {
    numTwoError.style.display = "none";
    numTwoStatus = false;
  }
  if (
    operator.value == "empty" ||
    operator.value == null ||
    operator.value == undefined
  ) {
    operatorError.style.display = "block";
    operatorStatus = true;
  } else {
    operator.style.display = "none";
    operatorStatus = false;
  }
}
