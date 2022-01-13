import React from 'react';

import Icon from '../Icon';

import '../../styles/global.css';

export default {
  title: 'Icon',
  component: Icon
};

export const BackIcon = () => <Icon icon="back" />;

export const HistoryIcon = () => <Icon icon="history" />;

export const RemoveIcon = () => <Icon icon="remove" />;
