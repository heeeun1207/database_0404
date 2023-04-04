const dep2 = require('./dep2');
console.log('require dep2' , dep2);
module.exports = () =>{
  console.log('dep2', dep2);
};

// require dep1 {}
// require dep2 [Function (anonymous)]
// dep2 [Function (anonymous)]
// dep1 {}