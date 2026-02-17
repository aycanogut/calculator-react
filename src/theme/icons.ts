import { GoArrowLeft } from 'react-icons/go';
import { PiTrash } from 'react-icons/pi';
import { RiHistoryFill } from 'react-icons/ri';

export const icons = [
  { label: 'trash', icon: PiTrash },
  { label: 'arrow-left', icon: GoArrowLeft },
  { label: 'history', icon: RiHistoryFill },
] as const;

export type IconProps = (typeof icons)[number]['label'];
