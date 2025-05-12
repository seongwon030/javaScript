const arr = [5, 6, 9, 1, 6, 3, 2, 1, 2, 7, 9, 4, 3];

const find1 = arr.find((element, index, array) => {
  return index == 2;
});

const find2 = arr.find((element, index, arr) => element === 3);
const find3 = arr.find((e) => e > 8);
const find4 = arr.find((e) => e > 10);

console.log(find1);
console.log(find2);
console.log(find3);
console.log(find4);
