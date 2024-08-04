class IdolModel{
  name;
  year;

  constructor(name,year){
    this.name = name;
    this.year = year;
  }
}

class FemaleIdolModel extends IdolModel {
  dance(){
    return '여자 아이돌이 춤을 춥니다.';
  }
}

class MaleIdolModel extends IdolModel {
  sing(){
    return '남자 아이돌이 노래를 부릅니다.';
  }
}

// 상속받을 때 프로퍼티뿐만 아니라 생성자도 상속받는다
const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin);

const jiMin = new MaleIdolModel('지민', 1995);
console.log(jiMin);

console.log(yuJin.dance());
console.log(yuJin.name);

console.log(jiMin.sing());
console.log(jiMin.year);

// 아무런 관계가 없기 때문에 에러가 발생한다
// console.log(yuJin.sing());

const cf = new IdolModel('코드팩토리', 1992);
console.log(cf);

console.log(cf.name);
// 부모 클래스의 프로퍼티를 자식 클래스가 받을 수 있지만 거꾸로는 안 된다
// console.log(cf.dance()); 

console.log(yuJin instanceof IdolModel);
console.log(yuJin instanceof FemaleIdolModel);
console.log(yuJin instanceof MaleIdolModel);

console.log('-----------');
console.log(jiMin instanceof IdolModel);
console.log(jiMin instanceof FemaleIdolModel);
console.log(jiMin instanceof MaleIdolModel);

console.log('-----------');
console.log(cf instanceof IdolModel);
console.log(cf instanceof FemaleIdolModel);
console.log(cf instanceof MaleIdolModel);