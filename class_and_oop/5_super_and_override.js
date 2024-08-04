class IdolModel{
  name;
  year;

  constructor(name, year){
    this.name = name;
    this.year = year;
  }

  sayHello(){
    return `안녕하세요 ${this.name}입니다.`;
  }
}

class FemaleIdolModel extends IdolModel{
  // 노래 /춤
  part;

  constructor(name, year, part){
    // 상속받은 부모 클래스에서 이미 생성자를 설정해놓았다
    // super는 부모 클래스의 생성자를 실행한다
    super(name, year);  // IdolModel() 
    this.part = part;
  }

  sayHello(){
    // JS 에서 변수값을 불러올 때는 super를 쓰면 안 되고 this를 써야 한다
    // 하지만 부모 클래스와 자식 클래스에서 같은 부분이 반복된다
    // return `안녕하세요 ${this.name}입니다. ${this.part}를 맡고 있습니다.`;

    return `${super.sayHello()} ${this.part}를 맡고 있습니다`; // 함수는 실행할 수 있다
  }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin);

const wonYoung = new IdolModel('장원영', 2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());
console.log(yuJin.sayHello());