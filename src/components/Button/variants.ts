import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-block h-10.5 w-19 text-text-primary border-none border-radius-0 cursor-pointer transition-all duration-200 hover:bg-key-hover',
  {
    variants: {
      variant: {
        number: 'bg-key-number hover:bg-key-hover',
        operator: 'bg-key-operator hover:bg-key-hover',
        helper: 'bg-key-number hover:bg-key-hover',
        equal: 'bg-key-equal hover:bg-key-hover',
      },
    },
    defaultVariants: {
      variant: 'number',
    },
  }
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export default buttonVariants;
