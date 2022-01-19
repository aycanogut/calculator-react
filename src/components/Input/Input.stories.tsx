import React from 'react';

import Input, { InputProps } from '../Input';

import '../../styles/global.css';

export default {
  title: 'Input',
  component: Input
};

export const InputStory = (args: InputProps) => <Input {...args} />;
