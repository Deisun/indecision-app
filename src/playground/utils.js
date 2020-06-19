console.log('utils.js is running');

const square = (x) => x * x;
const add = (a,b) => a + b;
const isAdult = (age) => age > 18;

// can export in line
export const subtract = (x, y) => x - y;

export {square, add, isAdult};



// exports - default export
export default subtract