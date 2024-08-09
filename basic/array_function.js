let iveMembers = [
  '안유진',
  '가을',
  '레이',
  '장원영',
  '리즈',
  '이서',
];

console.log(iveMembers);

// push()
iveMembers.push('코드팩토리');
console.log(iveMembers);

console.log('--------------');
// pop()
console.log(iveMembers.pop());
console.log(iveMembers);

console.log('--------------');
// shift() : 첫번째 값 삭제
console.log(iveMembers.shift());
console.log(iveMembers);

console.log('--------------');
// unshift() : 값 추가
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);

console.log('--------------');
console.log(iveMembers.splice(0,3));
console.log(iveMembers);

iveMembers = [
  '안유진',
  '가을',
  '레이',
  '장원영',
  '리즈',
  '이서',
];

// concat()
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers);
console.log('--------------');
// slice()
console.log(iveMembers.slice(0,3));
console.log(iveMembers);
console.log('--------------');

let iveMembers2 = [
  ...iveMembers,
];
console.log(iveMembers2);
console.log('--------------');

let iveMembers3 = [
  iveMembers,
];
console.log(iveMembers3);
console.log('--------------');

let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

console.log([
  ...iveMembers,
] === iveMembers);

// join()
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

// sort()
// 오름차순
iveMembers.sort();
console.log(iveMembers);

console.log(iveMembers.reverse());

let numbers = [
  1,
  9,
  7,
  5,
  3,
];

// a, b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a,b)=>{
  return a > b ? 1 : -1;
})

console.log(numbers);

numbers.sort((a,b) => a > b ? -1 : 1);
console.log(numbers);

// map()
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
  if(x === '안유진'){
    return `아이브: ${x}`;
  }else{
    return x;
  }
})); 

// filter()
numbers = [1,8,7,6,3];

console.log(numbers.filter((x) => x%2 === 0));

// find()
console.log(numbers.find((x) => x%2 === 0));

// findIndex()
console.log(numbers.findIndex((x) => x%2 === 0));

// reduce()
console.log(numbers.reduce((p,n) => p + n, 0));