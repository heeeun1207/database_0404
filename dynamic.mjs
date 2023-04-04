// const a = false ;
// if(a) {
//   import './func.mjs';
// }
// console.log('성공');
//! ES 모듈은 if문 안에서 import 하는것이 불가능하다. 이럴때 다이나믹 임포트를 사용한다. 
const a =true ;
if(a) {
  const m1 = await import('./func.mjs');
  console.log(m1);
  const m2 = await import('./var.mjs');
  console.log(m2);
}
// [Module: null prototype] { default: [Function: checkOddOrEven] }
//* export default 의 경우  import 할 때도 default 라는 속성이름으로 import 된다. 
// [Module: null prototype] { even: 'MTJ 짝수입니다.', odd: 'MTJ 홀수입니다.' }
//* import 함수 사용해서 모듈을 동적으로 불러옴
//import 는 pormise 를 반환하기에 await 이나 then 을 붙여야 한다.

