const yuJin = {
  name: '안유진',
  year: 2003,
  
  get age(){
    return new Date().getFullYear() - this.year;
  },

  set age(age){
    this.year = new Date().getFullYear() - age;
  }
}

console.log(yuJin);

/**
 * Extensible : 확장 가능한가?
 */
console.log(Object.isExtensible(yuJin)); // 기본 Extensible 은 true

yuJin['position'] = 'vocal';
console.log(yuJin);

Object.preventExtensions(yuJin); // Extensible 를 false로 
console.log(Object.isExtensible(yuJin));

yuJin['groupName'] = '아이브'; // 값 추가는 되지 않음. 에러를 던지지는 않는다!
console.log(yuJin); 

delete yuJin['position']; // 삭제는 가능하나 추가는 안 된다.
console.log(yuJin); 

/**
 * Seal : 봉인되어 있는가?
 */

const yuJin2 = {
  name: '안유진',
  year: 2003,
  
  get age(){
    return new Date().getFullYear() - this.year;
  },

  set age(age){
    this.year = new Date().getFullYear() - age;
  }
}

console.log(yuJin2);

console.log(Object.isSealed(yuJin2)); // 기본 값은 false : 봉인되어 있지 않다

Object.seal(yuJin2);
console.log(Object.isSealed(yuJin2));  

yuJin2['groupName'] = '아이브';  // Seal을 하게 되면 값을 추가하지 못 한다
console.log(yuJin2); 

delete yuJin2['name'];
console.log(yuJin2);  // 삭제도 되지 않는다. (에러가 나지 않는다!!)

Object.defineProperty(yuJin2, 'name', {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));
// Seal은 프로퍼티 어트리뷰트에 값을 추가하거나 writable 속성을 바꿀 수 있다.
// 동시에 configurable이 false가 된다. => Seal은 configurable이 false 로 바꾸는 작업이다.

/**
 * Freezed : 가장 높은 불변성 등급
 *
 * 읽기 외에 모든 기능을 불가능하게 만든다
 */

const yuJin3 = {
  name: '안유진',
  year: 2003,
  
  get age(){
    return new Date().getFullYear() - this.year;
  },

  set age(age){
    this.year = new Date().getFullYear() - age;
  }
}

console.log(Object.isFrozen(yuJin3));

Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));

yuJin3['groupName'] = '아이브';
console.log(yuJin3);

delete yuJin3['name'];
console.log(yuJin3);

// Object.defineProperty(yuJin3,'name',{
//   value: '코드팩토리',
// });
console.log(Object.getOwnPropertyDescriptor(yuJin3,'name'));

// writable과 configurable 모두 false로 설정 : 값 추가 및 삭제 불가능

const yuJin4 = {
  name: '안유진',
  year: 2003,
  wonYoung: {
    name: '장원영',
    year: 2002,
  },
};

Object.freeze(yuJin4);

console.log(Object.isFrozen(yuJin4));
console.log(Object.isFrozen(yuJin4['wonYoung'])); // 상위 오브젝트를 freeze해도 하위 오브젝트까지 적용은 안 된다. Extensible 과 Seal도 마찬가지.


