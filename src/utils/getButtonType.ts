type ButtonType = 'number' | 'operator' | 'helper' | 'equal';

const BUTTON_PATTERNS = {
  NUMBER: /\d+/,
  OPERATOR: /[C+x÷⌫%-]/,
  HELPER: /[±.]/,
  EQUAL: /[=]/,
} as const;

function getButtonType(button: string): ButtonType {
  if (BUTTON_PATTERNS.NUMBER.test(button)) {
    return 'number';
  }

  if (BUTTON_PATTERNS.OPERATOR.test(button)) {
    return 'operator';
  }

  if (BUTTON_PATTERNS.HELPER.test(button)) {
    return 'helper';
  }

  if (BUTTON_PATTERNS.EQUAL.test(button)) {
    return 'equal';
  }

  throw new Error(`Geçersiz buton karakteri: ${button}`);
}

export default getButtonType;
export type { ButtonType };
