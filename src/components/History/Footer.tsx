import type { MouseEventHandler, Dispatch, SetStateAction } from 'react';

import type { ItemProps } from './Item';

import Icon from '../Icon';

export interface HistoryFooterProps {
  setHistory: Dispatch<SetStateAction<ItemProps[]>>;
}

function HistoryFooter({ setHistory }: HistoryFooterProps) {
  const clearHistory: MouseEventHandler = () => {
    setHistory([]);
  };

  return (
    <footer className="flex h-full flex-col items-end justify-end p-1">
      <Icon
        name="trash"
        onClick={clearHistory}
      />
    </footer>
  );
}

export default HistoryFooter;
