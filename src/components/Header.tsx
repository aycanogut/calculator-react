import type { MouseEventHandler } from 'react';

import Icon from './Icon';

import LayoutTypes from '@/constants';
import type { LayoutType } from '@/constants';

interface HeaderProps {
  view: LayoutType;
  setView: (view: LayoutType) => void;
  hasHistory: boolean;
}

function Header({ view, setView, hasHistory }: HeaderProps) {
  const handleClick: MouseEventHandler = () => {
    if (view === LayoutTypes.Calculator) {
      setView(LayoutTypes.History);
    } else {
      setView(LayoutTypes.Calculator);
    }
  };

  const isCalculator = view === LayoutTypes.Calculator;
  const currentIcon = isCalculator ? 'history' : 'arrow-left';

  return (
    <header className="m-0 mr-auto block p-1">
      {(!isCalculator || hasHistory) && (
        <Icon
          name={currentIcon}
          onClick={handleClick}
        />
      )}
    </header>
  );
}

export default Header;
