const http = require('http');
const url = require('url');

// Function to perform arithmetic operations
function calculate(num1, num2, operator) {
  let result;
  switch (operator) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      if (num2 === 0) {
        result = 'Error: Division by zero';
      } else {
        result = num1 / num2;
      }
      break;
    default:
      result = 'Invalid operator. Use add, subtract, multiply, or divide.';
  }
  return result;
}

// Create the server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { num1, num2, operator } = parsedUrl.query;

  if (num1 && num2 && operator) {
    const result = calculate(parseFloat(num1), parseFloat(num2), operator);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Result: ${result}`);
  } else {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Please provide num1, num2, and operator query parameters.');
  }
});

// Set the port to 3000 or use environment variable
const port = process.env.PORT || 3000;

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


