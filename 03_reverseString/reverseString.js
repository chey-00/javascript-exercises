const reverseString = function (str1) {
  let reversedString = str1.split("").reverse().join("");

  return reversedString;
};

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
