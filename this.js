//! 노드에서 this 는 브라우저의 this와 다르다
console.log(this);
console.log(this === module.exports);
console.log(this === exports);
function whatIsTis(){
  console.log('function' , this === exports, this === global);
}
whatIsTis();
// {}
// true
// true
// function false true