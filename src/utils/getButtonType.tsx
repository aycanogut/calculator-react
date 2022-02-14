export const getButtonType = (button: string) => {
  const numbers = new RegExp(/\d+/);
  const operators = new RegExp(/([C+x÷⌫%±.-])/);

  if (numbers.test(button)) {
    return 'number';
  } else if (operators.test(button)) {
    return 'operator';
  }
};
