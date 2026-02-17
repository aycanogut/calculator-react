import { cx, type CxOptions } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: CxOptions): string {
  return twMerge(cx(inputs));
}

export default cn;
