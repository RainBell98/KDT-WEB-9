function sum1(a: number, b: number) {
  console.log(a + b);
}
sum1(5, 11);

function sum2(...a: number[]) {
  //   let sum = a.reduce((acc, cur) => acc + cur, 0);
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  console.log(sum);
}
sum2(1, 2, 3, 4, 10);
