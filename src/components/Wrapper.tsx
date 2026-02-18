import { useState } from 'react';

import type { ItemProps } from './History/Item';

import Calculator from './Calculator';
import Header from './Header';
import History from './History';

import LayoutTypes from '@/constants';
import type { LayoutType } from '@/constants';

function Wrapper() {
  const [view, setView] = useState<LayoutType>(LayoutTypes.Calculator);

  const isCalculator = view === LayoutTypes.Calculator;

  const [displayValue, setDisplayValue] = useState('');
  const [subDisplayValue, setSubDisplayValue] = useState('');
  const [history, setHistory] = useState<ItemProps[]>([]);

  return (
    <div className="bg-input border-outer-border flex h-94 w-87.5 flex-col items-center border-14 p-1.5">
      <Header
        view={view}
        setView={setView}
      />
      {isCalculator ? (
        <Calculator
          displayValue={displayValue}
          setDisplayValue={setDisplayValue}
          subDisplayValue={subDisplayValue}
          setSubDisplayValue={setSubDisplayValue}
          setHistory={setHistory}
        />
      ) : (
        <History
          history={history}
          setHistory={setHistory}
        />
      )}
    </div>
  );
}

export default Wrapper;
