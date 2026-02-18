import type { HTMLAttributes } from 'react';

import cn from '@/utils/cn';

export interface DisplayProps extends HTMLAttributes<HTMLDivElement> {
  displayValue: string;
  subDisplayValue: string;
}

const SMALL_FONT_THRESHOLD = 10;

function Display({ displayValue, subDisplayValue }: DisplayProps) {
  const isSmallFont = displayValue.length > SMALL_FONT_THRESHOLD;

  return (
    <section className="text-text-primary flex h-18.5 flex-col items-end pr-2 pb-2.5 text-3xl font-bold">
      <div className="text-text-secondary h-4 text-xs">{subDisplayValue}</div>
      <div className={cn('mt-2.5', isSmallFont && 'text-2xl')}>{displayValue || '0'}</div>
    </section>
  );
}

export default Display;
