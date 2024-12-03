// Import the readline module to interact with the command line
const readline = require('readline');

// Create an interface for reading input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to perform the arithmetic operation
function calculate(num1, num2, operator) {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        result = 'Error: Division by zero is not allowed';
      } else {
        result = num1 / num2;
      }
      break;
    default:
      result = 'Invalid operator';
  }
  return result;
}

// Prompt the user for input
rl.question('Enter the first number: ', (num1) => {
  rl.question('Enter the operator (+, -, *, /): ', (operator) => {
    rl.question('Enter the second number: ', (num2) => {
      // Convert user input to numbers
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);

      // Perform the calculation and display the result
      const result = calculate(num1, num2, operator);
      console.log(`Result: ${result}`);

      // Close the readline interface
      rl.close();
    });
  });
});

