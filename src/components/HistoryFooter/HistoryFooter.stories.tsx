import React from 'react';

import HistoryFooter, { Props } from '../HistoryFooter';

import '../../styles/global.css';

export default {
  title: 'Footer',
  component: HistoryFooter
};

export const FooterStory = (args: JSX.IntrinsicAttributes & Props) => <HistoryFooter {...args} />;
