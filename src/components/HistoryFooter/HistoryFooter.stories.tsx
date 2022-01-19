import React from 'react';

import HistoryFooter, { HistoryFooterProps } from '../HistoryFooter';

import '../../styles/global.css';

export default {
  title: 'Footer',
  component: HistoryFooter
};

export const HistoryFooterStory = (args: HistoryFooterProps) => <HistoryFooter {...args} />;
