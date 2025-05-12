// 원본 배열 변경 안 되는 경우
let arr1 = ["철수", "영희"];
let arr2 = arr1.slice();
arr2.push("성원");

console.log(arr2);
console.log(arr1);

let arr3 = arr1.map((item) => item);
arr3.push("성원");

console.log(arr3);
console.log(arr1);

// ES6 스프레드 연산자

let arr4 = [...arr1];
arr4.push("성원");
console.log(arr4);
console.log(arr1);

// 원본 배열을 변경하는 경우
let arr5 = arr1;
arr5.push("성원");

console.log(arr1);
console.log(arr5);
