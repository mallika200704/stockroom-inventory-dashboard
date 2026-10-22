// Assignment 5: Function Architecture and Scope
function calculateArea(length = 5, width = 4) {
  return length * width;
}
const rectangleArea = (length = 5, width = 4) => length * width;

console.log(`Standard Function Area (Default 5x4): ${calculateArea()}`);
console.log(`Arrow Function Area (Custom 10x3): ${rectangleArea(10, 3)}`);

function testScope() {
  var functionVar = "Available inside function";
  if (true) {
    let blockVar = "Block scoped";
    const blockConst = "Also block scoped";
    console.log(blockConst);
  }
  try {
    console.log(blockVar);
  } catch (error) {
    console.log(`Scope Test Error: ${error}`);
  }
  console.log(functionVar);
}
testScope();
