const arr = [5, 6, 9, 1, 6, 3, 2, 1, 2, 7, 9, 4, 3];

const find1 = arr.findIndex((element, index, array) => {
  return index < 7 && index > 5;
});

console.log(find1);

const find2 = arr.findIndex((element, index, arr) => element === 3);

console.log(find2);
