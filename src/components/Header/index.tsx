import React, { MouseEventHandler } from 'react';

import { historyIcon, backIcon } from '../../utils/iconShortcuts';

import Icon from '../Icon';
import History from '../History';
import Calculator from '../Calculator';

import styles from './Header.module.css';

export interface Props {
  setLayout: (layout: JSX.Element) => void;
  icon: any;
  setIcon: Function;
}

const Header = ({ setLayout, icon, setIcon }: Props) => {
  // conditional rendering of layout and icon
  const handleClick: MouseEventHandler = () => {
    if (icon.src === backIcon.src) {
      setLayout(<Calculator />);
      setIcon(historyIcon);
    } else {
      setLayout(<History />);
      setIcon(backIcon);
    }
  };

  return (
    <header className={styles.Header}>
      <Icon source={icon.src} alt={icon.alt} onClick={handleClick} />
    </header>
  );
};

export default Header;
