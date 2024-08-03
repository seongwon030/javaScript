class IdolModel {
   // 클래스내의 함수나 변수 : 프로퍼티
   // 자바스크립트에서 프로퍼티 정의는 옵셔널 : 해도 되고 안 해도 된다
   // ** 다만 생성자안에서 this 키워드를 가지고 저장을 한 번 해 줘야 한다 **
  name = '안유진';
  year;

  constructor(name, year) {
    // this는 현재 인스턴스
    this.name = name;  // 왼쪽 this.name은 class 내의 name, 오른쪽 name은 입력받은 name
    this.year = year;
  }

  // 클래스 내 함수 : 메소드
  // 함수는 function을 안 쓰고 이름만 넣어줘도 암묵적으로 함수로 간주
  sayName() {
    return `안녕하세요 저는 ${this.name}입니다`; // this 키워드는 현재 인스턴스(객체)를 의미함 
  }
}

// 생성자의 장점 
// 쉽게 인스턴스를 만들어낼 수 있음
const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);
const ray = new IdolModel('레이', 2004);
console.log(ray);
const wonYoung = new IdolModel('장원영', 2004);
console.log(wonYoung);
const liz = new IdolModel('리즈', 2004);
console.log(liz);
const eseo = new IdolModel('이서', 2007);
console.log(eseo);

// 인스턴스는 객체처럼 사용할 수 있다
console.log(yuJin.name);
console.log(yuJin.year);

// 클래스의 인스턴스는 객체이므로 잘 실행되는 걸 볼 수 있다
console.log(yuJin.sayName());
console.log(wonYoung.sayName());

// 클래스는 함수로 인식된다
console.log(typeof IdolModel);
console.log(typeof yuJin);