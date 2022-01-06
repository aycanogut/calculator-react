import React from 'react';

import data from '../../data.json';

import Icon from '../Icon';

import '../../styles/global.css';

export default {
  title: 'Icon',
  component: Icon
};

export const HistoryIcon = () => (
  <Icon source={data.icons.history.src} alt={data.icons.history.alt} />
);

export const BackIcon = () => <Icon source={data.icons.back.src} alt={data.icons.back.alt} />;

export const GarbageIcon = () => (
  <Icon source={data.icons.garbage.src} alt={data.icons.garbage.alt} />
);
