class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  /**
   * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
   * 2) private한 값을 반환할 때
   */

  get nameAndYear() {
    return `${this.name}-${this.year}`;
  }

  // 보통 바꾸고 싶은 프로퍼티의 이름과 똑같이 설정한다 
  // 무조건 파라미터 하나 
  set setName(name) {
    this.name = name;
  }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
// getter는 객체의 key 값처럼 사용
console.log(yuJin.nameAndYear);

// setter 안 써도 바뀌지 않나? 
// 프로퍼티를 private 으로 했을 때 직접 액세스 불가능하므로 set 사용해서 값을 바꿔준다
// setter 오른쪽 입력값이 파라미터로 들어간다
yuJin.setName = '장원영';
console.log(yuJin);

class IdolModel2{
  // # 은 ES7 엔진에만 사용가능
  #name;
  year;

  constructor(name,year) {
    this.#name = name;
    this.year = year;
  }

  // getter 로 private 값을 가져온다
  get name(){
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}

const yuJin2 = new IdolModel2('안유진',2003);
console.log(yuJin2);
console.log(yuJin2.name);

yuJin2.name = '코드팩토리';
console.log(yuJin2.name);