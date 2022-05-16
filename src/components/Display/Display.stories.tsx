import React from 'react';

import Display, { IDisplayProps } from './index';

import '../../styles/global.css';

export default {
  title: 'Display',
  component: Display
};

export const DisplayStory = (args: IDisplayProps) => <Display {...args} />;
