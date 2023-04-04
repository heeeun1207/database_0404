//! var.js 를 참조하는 func.js 만들어보자 !
const {odd, even} =require ('./var')
function checkOddOrEven(num){
  if(num % 2) { //홀수이면
    return odd;
  }
  return even; //짝수 
}
module.exports =checkOddOrEven;