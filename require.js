//! var.js 있는 곳에 require.js를 만든다.
console.log('require가 가장 위에 오지 않아도 됩니다.');
module.exports ='저를 찾아보세요.';
require('./var');

console.log('require.chche입니다.');
console.log(require.cache); // 파일이름 속성명 들어있다 -> 속성값으로 각 파일의 모듈 객체가 들어있다. 
console.log('require.main 입니다.');
console.log(require.main === module); // true -> require.main은 노드 실행 시 첫 모듈을 가리킨다.  
console.log(require.main.filename);//첫 모듈의 경로 확인 Users/heeeun/Desktop/database_0404/require.js 


