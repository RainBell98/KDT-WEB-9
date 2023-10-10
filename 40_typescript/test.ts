//타입스크립트의 기본형태
const a: string = 'hi';
let b: number = 1;
let c: boolean = false;
let d: object = {
  name: '이우종',
  age: 20,
};
console.log(a, b, c, d);

//타입스크립트를 쓰는 이유
//1) js로 실행 시 타입 체크가 없어 의도와 다른 방식으로 쓰일 수 있음
//2) 정적파일 언어 -> 실행하지 않고 코드 상의 에러를 알려줌(실시간 디버깅)

// 배열
let arr: string[] = ['Woo', 'Jong'];
let Arr = [1, 2, 3, 'ds', 5, true];

//객체
let person: {
  name: string;
  age: number;
};
person = {
  name: '이우종',
  age: 20,
};

//객체배열
let personArr: {
  name: string;
  age: number;
}[];
personArr = [
  {
    name: '이우종',
    age: 20,
  },
];
