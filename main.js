const child = require('./test/childClass');
const child2 = require('./test/childClass');
const foo = require('./test/foo');

const childInstance = child.getInstance();
 const childInstance2 = child2.getInstance();
childInstance.inc();
console.log('---');
console.log(childInstance);
console.log('-foo');
foo();
// childInstance.createInstance();
console.log(childInstance);
console.log(childInstance2);
