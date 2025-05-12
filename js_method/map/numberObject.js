const numbers = [1, 3, 5, 7, 9];

const objectArr = numbers.map((number, index) => ({ number, index }));
console.log(objectArr);

const nums = [1, 2, 3, 4, 5];

// 각 숫자를 제곱한 새로운 배열 생성
const squares = nums.map((num) => num * num);

console.log(squares); // [1, 4, 9, 16, 25]
