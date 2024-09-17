function IdolModel(name, year){
  if(!new.target){
    return new IdolModel(name, year);
  }
  this.name = name;
  this.year = year;

  this.dance = function(){
    return `${this.name}이 춤을 춥니다`;
  }
}

const yuJin = new IdolModel('안유진',2003);
console.log(yuJin);
// console.log(yuJin.dance());


const yuJin2 = IdolModel('안유진',2003);
console.log(yuJin2); // 생성자 함수면 new키워드가 필요
// console.log(global.name); // 기능은 하지만 하지 말아야 함

// new을 써야 this를 global로 사용하지 않는다 

const IdolModelArrow = (name, year) => {
  this.name = name;
  this.year = year;
};

const yuJin3 = new IdolModelArrow('안유진',2003);
// new를 사용하는 건 화살표함수에서가 아닌 일반함수에서만 가능하다