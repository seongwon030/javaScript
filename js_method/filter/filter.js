let array = [3, 5, 11, 0, 9, "string"];

const result = array.filter((value) => value < 10);
console.log(result);

const result2 = array.filter(lessThanTen);
console.log(result2);
