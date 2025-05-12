/**
 * scope
 *
 */

var numberOne = 20;

function levelOne() {
  console.log(numberOne);
}

// levelOne();

function levelOne() {
  var numberOne = 40;

  console.log(numberOne);
}

// levelOne();

console.log(numberOne);
// 함수 스코프 내에서 numberOne 선언하면 상위스코프 내의 numberOne은 접근할 수 없다.

function levelOne() {
  var numberOne = 40;

  function levelTwo() {
    var numberTwo = 99;
    console.log(`levelTwo numberTwo: ${numberTwo}`);
    // 상위 스코프의 numberOne을 접근할 수 있다.
    console.log(`levelTwo numberOne: ${numberOne}`);
  }

  levelTwo();
  console.log(`levelOne numberTwo: ${numberOne}`);
}

levelOne();
// 모든 선언은 가장 가까운 스코프에 있는 선언부터 찾는다.

console.log(numberOne);
// console.log(numberTwo);
// 하위스코프에는 접근할 수 없다.

/**
 * JS -> Lexical Scope
 *
 * 선언된 위치가 상위 스코프를 정한다.
 *
 * Dynamic Scope
 *
 * 실행한 위치가 상위 스코프를 정한다.
 */

var numberThree = 3;

function functionOne() {
  var numberThree = 100;

  functionTwo();
}

function functionTwo() {
  // global scope에서 선언한 numberThree를 사용한다.
  // Dynamic Scope라면 functionOne 내의 numberThree를 사용해야 하지만 js는 Lexical Scope이기 때문에
  console.log(numberThree);
}

functionOne();

var i = 999;

for (var i = 0; i < 10; i++) {
  console.log(i);
}

console.log(`i in global scope: ${i}`);
// 함수만이 var 키워드를 사용했을 때 새로운 스코프를 만든다.
// for문은 스코프를 만들지 않는다. (if 문 또한)
// 그래서 global scope의 i를 사용한다.

i = 999;
// block level scope
// -> let 또는 const 키워드를 사용하면 새로운 스코프를 만든다.
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(`i in global scope: ${i}`);

/**
 * var 키워드느 함수 레벨 스코프를 만들어낸다.
 *
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다.
 */
