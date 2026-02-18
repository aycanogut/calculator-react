import { type ButtonHTMLAttributes } from 'react';

import buttonVariants, { type ButtonVariantProps } from './variants';

import cn from '@/utils/cn';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariantProps & {
    value: string;
  };

function Button({ value, variant, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant }))}
      type="button"
      {...props}
    >
      {value}
    </button>
  );
}

export default Button;
