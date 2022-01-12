import React from 'react';

import icons from '../../data.json';

import Icon from '../Icon';

import '../../styles/global.css';

export default {
  title: 'Icon',
  component: Icon
};

export const HistoryIcon = () => <Icon source={icons.history.src} alt={icons.history.alt} />;

export const BackIcon = () => <Icon source={icons.back.src} alt={icons.back.alt} />;

export const GarbageIcon = () => <Icon source={icons.garbage.src} alt={icons.garbage.alt} />;
