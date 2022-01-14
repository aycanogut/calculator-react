import React from 'react';

import Icon from '../Icon';

import '../../styles/global.css';

export default {
  title: 'Icon',
  component: Icon
};

export const BackIcon = (args: JSX.IntrinsicAttributes) => <Icon icon="back" {...args} />;

export const HistoryIcon = (args: JSX.IntrinsicAttributes) => <Icon icon="history" />;

export const RemoveIcon = (args: JSX.IntrinsicAttributes) => <Icon icon="remove" />;
