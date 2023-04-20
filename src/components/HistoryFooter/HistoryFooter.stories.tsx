import React from 'react'

import HistoryFooter, { IHistoryFooterProps } from '../HistoryFooter'

import '../../styles/global.css'

export default {
  title: 'Footer',
  component: HistoryFooter
}

export const HistoryFooterStory = (args: IHistoryFooterProps) => <HistoryFooter {...args} />
