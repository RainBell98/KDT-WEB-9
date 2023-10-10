//튜플
//튜플 타입 선언
let drink: [string, number];
//튜플 초기화
drink = ['cola', 2000];

//튜플의 선언과 초기화
let drink2: [string, number] = ['cola', 2000];

//js 배열과 동일하게 인덱스 접근 가능, 매서드 사용가능
console.log(drink[0]);

//spread 연산자 사용 가능
console.log([...drink2, '콜라']);

//readonly: 데이터 변경 안되게
let drink3: readonly [string, number] = ['cola', 2000];
// drink3.push('콜라');

//////////////////////////////////
//열거형
//enum은 기본적으로 0부터 1씩 증가하는 값을 갖는다

enum Auth {
  admin = 100,
  user = 200,
  guest,
}

//enum은 문자열을 지정해 줄 수 있다.
enum Delivery {
  panding = 'panding',
  delivery = 'delivery',
  finish = 1,
}
console.log(Auth.admin);
console.log(Auth.user);
console.log(Auth.guest);
console.log(Delivery.panding);

//any
let Any: any = [1, 2, 3, 4, '5', '6'];
