import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { Props } from '../Button';

const meta: Meta = {
  title: 'Button',
  component: Button
};

export const Number = () => <Button variant="number">1</Button>;
export const Operator = () => <Button variant="operator">+</Button>;
export const Equal = () => <Button variant="equal">=</Button>;

export default meta;
