const repeatString = function (str, num) {
  if (num >= 0) {
    return (result = str.repeat(num));
  } else {
    return "ERROR";
  }
};
let result;
repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
