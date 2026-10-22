// Assignment 2: Operators, Expressions, and Input Handling
// Run in a browser because prompt() is a browser API.
const subtotal = Number(prompt("Enter bill amount:"));
const tipPercentage = Number(prompt("Enter tip percentage:"));

if (!Number.isFinite(subtotal) || subtotal < 0 ||
    !Number.isFinite(tipPercentage) || tipPercentage < 0) {
  console.log("Please enter valid non-negative numbers.");
} else {
  const tip = subtotal * tipPercentage / 100;
  const total = subtotal + tip;
  console.log(`Subtotal: $${subtotal}`);
  console.log(`Tip Percentage: ${tipPercentage}%`);
  console.log(`Calculated Tip: $${tip}`);
  console.log(`Total Amount to Pay: $${total}`);
}
