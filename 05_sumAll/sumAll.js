//instruction: Implement a function that takes 2 integers and returns the sum of every number between(and including) them:
// formula: Sum = (num2 - num1 + 1) / 2 *(num1 + num2) / num1 = smaller number

sumAll(10, 1);
function sumAll(num1, num2) {
  let sum;
  // if (typeOf(num1) !== "number" || typeOf(num2) !== "number") {
  // return "ERROR";
  // }

  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  } else if (num1 < num2) {
    sum = ((num2 - num1 + 1) / 2) * (num1 + num2);
    console.log(sum);
    return sum;
  } else if (num1 > num2) {
    const temp = num1;
    num1 = num2;
    num2 = temp;
    sum = ((num2 - num1 + 1) / 2) * (num1 + num2);
    console.log(sum);
    return sum;
  }
}

// Do not edit below this line
module.exports = sumAll;
