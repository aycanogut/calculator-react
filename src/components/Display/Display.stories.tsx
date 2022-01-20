import React from 'react';

import Display, { DisplayProps } from '.';

import '../../styles/global.css';

export default {
  title: 'Display',
  component: Display
};

export const DisplayStory = (args: DisplayProps) => <Display {...args} />;
