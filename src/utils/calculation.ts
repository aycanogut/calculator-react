function add(x: number, y: number): number {
  return x + y;
}

function subtract(x: number, y: number): number {
  return x - y;
}

function multiply(x: number, y: number): number {
  return x * y;
}

function divide(x: number, y: number): number {
  if (y === 0) {
    throw new Error('Division by zero error: Divisor cannot be zero');
  }

  return x / y;
}

export { add, subtract, multiply, divide };
