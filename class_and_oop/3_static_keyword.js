class IdolModel{
  name;
  year;

  // static 은 인스턴스가 아닌 클래스에 귀속된다
  static groupName = '아이브';

  constructor(name, year){
    this.name = name;
    this.year = year;
  }

  static returnGroupName(){
    return '아이브';
  }
}

const yuJin = new IdolModel('안유진', 2003); // new는 객체를 만들 때 사용한다
console.log(yuJin);

console.log(IdolModel.groupName); 
console.log(IdolModel.returnGroupName());

/**
 * factory constructor
 */

class IdolModel3 {
  name;
  year;

  constructor(name,year){
    this.name = name;
    this.year = year;
  }

  // 오브젝트로부터 클래스의 인스턴스를 만들겠다라는 일종의 약속
  static fromObject(object){
    return new IdolModel3(
      object.name,
      object.year,
    );
  }

  static fromList(list){
    return new IdolModel3(
      list[0],
      list[1],
    );
  }
}

const yuJin2 = IdolModel3.fromObject({
  name: '안유진',
  year: 2003,
});
console.log(yuJin2);  
// new 를 쓰지 않았는데도 IdolModel의 인스턴스(객체)가 생성되는 이유는 
// fromObject 함수가 새로 IdolModel 을 만들어 반환해주기 때문

const wonYoung = IdolModel3.fromList(
  [
    '장원영',
    2003,
  ]
);

console.log(wonYoung);

// static 으로 factory constructor 의 형태를 구현하게 되면 단순히 하나의 컨스트럭터로
// 인스턴스를 반환받지 않고 미리 데이터를 입력받아 인스턴스를 반환할지 정의해놓을 수 있다