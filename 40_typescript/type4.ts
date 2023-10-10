let value: string | number = '안녕하세요';
value = 1000;

//함수에 모든 값이 들어올 수 있따 => 제네릭 타입 사용
function getValue(val: string | number | object) {
  return val;
}
getValue('hi');

function getValue2<T>(value: T): T {
  return value;
}
console.log(getValue2<string>('안녕하세요'));
console.log(getValue2<number>(100));

function arrLength<T>(arr: T[]) {
  return arr.length;
}
function printFunc<T>(x: T, y: T) {
  return x;
}
console.log(arrLength<number>([1, 2, 3, 4, 5]));
