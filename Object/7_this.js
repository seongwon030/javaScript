/**
 * this
 *
 * JS는 lexical scope를 사용하기 때문에 함수의 상위스코프가
 * 정의 시점에 평가된다.
 *
 *  ***** 하지만 this 키워드는 바인딩이 객체가 생성되는 시점에 결정된다.
 */

const testFunction = function () {
  return this;
};

// 일반함수를 실행하면 this 키워드가 global 객체를 가리킨다.
// 여기서 this는 window 객체를 가리킨다.
console.log(testFunction());
console.log(testFunction() === globalThis);

const yuJin = {
  name: "안유진",
  year: 2003,
  sayHello: function () {
    return `안녕하세요. ${this.name}입니다.`;
  },
};

console.log(yuJin.sayHello());
// this는 yuJin 객체를 가리킨다.

function Person(name, year) {
  this.name = name;
  this.year = year;
  this.sayHello = function () {
    return `안녕하세요. ${this.name}입니다.`;
  };
}

const yuJin2 = new Person("안유진", 2003);
console.log(yuJin2.sayHello());

// prototype 에 함수를 정의해도 this키워드는 객체를 가리킨다.
// 하지만 함수 내에 함수를 선언하면 this 키워드는 global 객체를 가리킨다.
Person.prototype.dance = function () {
  function dance2() {
    return `${this.name}이 춤을 춥니다.`;
  }

  return dance2();
};

console.log(yuJin2.dance());

/**
 * this 키워드가 어떤걸 카그키냐는 세 가지만 기억
 *
 * 1) 일반 함수 호출할 때 this는 global 객체를 가리킨다.
 * 2) 메서드로 호출할 때는 호출된 객체를 가리킨다.
 * 3) new 키워드로 객체를 생성했을 때는 객체를 가리킨다.
 */

/**
 * 1) apply()
 * 2) call()
 * 3) bind()
 */

function returnName() {
  return this.name;
}

console.log(returnName()); // global

const yuJin3 = {
  name: "안유진",
};

console.log(returnName.call(yuJin3));
console.log(returnName.apply(yuJin3));

/**
 * 1) call -> 콤마를 기반으로 파라미터를 순서대로 넘겨주고
 * 2) apply -> arguments를 리스트로 입력해야 한다
 * -> 실행하는 순간 바로 함수가 실행된다
 */

function multiply(x, y, z) {
  return `${this.name} / 결과값 :  ${x * y * z}`;
}

console.log(multiply.call(yuJin3, 1, 2, 3));
console.log(multiply.apply(yuJin3, [1, 2, 3]));

/**
 * bind()
 * -> this를 바인딩한 새로운 함수를 반환한다.
 * -> 바인딩만 하고 나중에 실행 가능.
 */

const laterFunction = multiply.bind(yuJin3, 1, 2, 3);
console.log(laterFunction);
console.log(laterFunction());
