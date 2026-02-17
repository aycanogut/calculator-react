import type { HTMLAttributes } from 'react';

import Display from './Display';

export interface ScreenProps extends HTMLAttributes<HTMLDivElement> {
  displayValue: string;
  subDisplayValue: string;
}

function Screen({ displayValue, subDisplayValue }: ScreenProps) {
  return (
    <section className="flex w-full flex-col">
      <Display
        displayValue={displayValue}
        subDisplayValue={subDisplayValue}
      />
    </section>
  );
}

export default Screen;
