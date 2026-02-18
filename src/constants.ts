const LayoutTypes = {
  Calculator: 'calculator',
  History: 'history',
} as const;

export type LayoutType = (typeof LayoutTypes)[keyof typeof LayoutTypes];

export default LayoutTypes;
