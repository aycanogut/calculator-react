import type { MouseEventHandler, Dispatch, SetStateAction } from 'react';

import type { ItemProps } from './Item';

import Icon from '@/components/Icon';

export interface FooterProps {
  setHistory: Dispatch<SetStateAction<ItemProps[]>>;
}

function Footer({ setHistory }: FooterProps) {
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

export default Footer;
