const removeFromArray = function (array, ...val) {
  const newArray = [];

  array.forEach((item) => {
    if (!val.includes(item)) {
      newArray.push(item);
    }
  });

  return newArray;
};

let myArray = [1, 2, 3, 4];
removeFromArray(myArray, 3);

// Do not edit below this line
module.exports = removeFromArray;
