import React, { MouseEventHandler } from 'react';

import { LayoutTypes } from '../../constant';

import Icon from '../Icon';

import styles from './Header.module.css';

export interface Props {
  view: string;
  setView: Function;
}

const Header = ({ view, setView }: Props) => {
  const handleClick: MouseEventHandler = () => {
    view === LayoutTypes.Calculator
      ? setView(LayoutTypes.History)
      : setView(LayoutTypes.Calculator);
  };

  const currentIcon = view === LayoutTypes.Calculator ? 'history' : 'back';

  return (
    <header className={styles.Header}>
      <Icon icon={currentIcon} onClick={handleClick} />
    </header>
  );
};

export default Header;
