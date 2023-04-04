console.log(import.meta.url);
console.log('__filename 은 에러');
console.log(__filename);
// ES 모듈에는 __filename 과 __dirname 을 사용할 수없다.
//* 대신 import.meta.url 로 경로를 가져올수있다 .
//콘솔 경로확인 =>  Desktop/database_0404/filename.js  