export const getButtonType = (button: string) => {
  const numbers = new RegExp(/\d+/);
  const operators = new RegExp(/[+-x÷C⌫%±.=]/);

  if (numbers.test(button)) {
    return 'number';
  } else if (operators.test(button)) {
    return 'operator';
  }
};
