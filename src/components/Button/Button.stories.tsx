import React from 'react';
import { Meta, Story } from '@storybook/react';
import ButtonComponent, { Props } from '../Button';

const meta: Meta = {
  title: 'Button',
  component: ButtonComponent,
  argTypes: {
    onClick: { action: 'clicked' }
  }
};

export default meta;

const Template: Story<Props> = (args) => <ButtonComponent {...args} />;

export const Number = Template.bind({});

Number.args = {
  variant: 'number',
  children: '1'
};

export const Operator = Template.bind({});

Operator.args = {
  variant: 'operator',
  children: '+'
};

export const Equal = Template.bind({});

Equal.args = {
  variant: 'equal',
  children: '='
};

