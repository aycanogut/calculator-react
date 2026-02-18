import type { IconBaseProps } from 'react-icons';

import { type IconProps, icons } from '@/theme/icons';

interface Props extends IconBaseProps {
  name: IconProps;
}

function Icon({ name, ...props }: Props) {
  const selectedIcon = icons.find(icon => icon.label === name);

  if (!selectedIcon) return null;

  const IconComponent = selectedIcon.icon;

  return (
    <IconComponent
      className="text-text-primary size-6 cursor-pointer"
      {...props}
    />
  );
}

export default Icon;
