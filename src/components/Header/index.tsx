import React, { MouseEventHandler } from 'react';

import Layout from '../../utils/enum';

import Icon from '../Icon';

import styles from './Header.module.css';

export interface Props {
  view: string;
  setView: Function;
}

const Header = ({ view, setView }: Props) => {
  const handleClick: MouseEventHandler = () => {
    view === Layout.Calculator ? setView(Layout.History) : setView(Layout.Calculator);
  };

  const currentIcon = view === Layout.Calculator ? 'history' : 'back';

  return (
    <header className={styles.Header}>
      <Icon icon={currentIcon} onClick={handleClick} />
    </header>
  );
};

export default Header;
