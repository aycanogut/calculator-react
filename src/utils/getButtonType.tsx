export const getButtonType = (button: string) => {
  const numbers = new RegExp(/\d+/)
  const operators = new RegExp(/([C+x÷⌫%-])/)
  const helperOperators = new RegExp(/([±.])/)
  const equal = new RegExp(/[=]/)

  if (numbers.test(button)) {
    return 'number'
  } else if (operators.test(button)) {
    return 'operator'
  } else if (helperOperators.test(button)) {
    return 'helper'
  } else if (equal.test(button)) {
    return 'equal'
  }
}
