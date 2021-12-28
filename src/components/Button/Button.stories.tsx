import React from 'react';
import Button from '../Button';
import '../../styles/global.css';

export default {
  title: 'Button',
  component: Button
};

// variants
export const Number = () => <Button variant="number">1</Button>;
export const Operator = () => <Button variant="operator">+</Button>;
export const Equal = () => <Button variant="equal">=</Button>;
