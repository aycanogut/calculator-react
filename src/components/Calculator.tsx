import type { Dispatch, SetStateAction } from 'react';

import type { ItemProps } from './History/Item';

import Keyboard from './Keyboard';
import Screen from './Screen';

export interface CalculatorProps {
  displayValue: string;
  setDisplayValue: Dispatch<SetStateAction<string>>;
  subDisplayValue: string;
  setSubDisplayValue: Dispatch<SetStateAction<string>>;
  setHistory: Dispatch<SetStateAction<ItemProps[]>>;
}

function Calculator({ displayValue, setDisplayValue, subDisplayValue, setSubDisplayValue, setHistory }: CalculatorProps) {
  return (
    <div className="mt-auto flex flex-col">
      <Screen
        displayValue={displayValue}
        subDisplayValue={subDisplayValue}
      />
      <Keyboard
        displayValue={displayValue}
        setDisplayValue={setDisplayValue}
        subDisplayValue={subDisplayValue}
        setSubDisplayValue={setSubDisplayValue}
        setHistory={setHistory}
      />
    </div>
  );
}

export default Calculator;
