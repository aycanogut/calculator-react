import React from 'react';

import Button from '../Button';

import '../../styles/global.css';

export default {
  title: 'Button',
  component: Button
};

// variants
export const Number = () => <Button variant="number" value="1" />;
export const Operator = () => <Button variant="number" value="+" />;
export const Equal = () => <Button variant="number" value="=" />;
