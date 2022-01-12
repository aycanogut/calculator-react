import React, { MouseEventHandler } from 'react';

import Layout from '../../utils/enum';
import icons from '../../data.json';

import Icon from '../Icon';

import styles from './Header.module.css';

export interface Props {
  view: any;
  setView: Function;
}

const Header = ({ view, setView }: Props) => {
  const handleClick: MouseEventHandler = () => {
    view === Layout.Calculator ? setView(Layout.History) : setView(Layout.Calculator);
  };

  const currentIcon = view === Layout.Calculator ? icons.history : icons.back;

  return (
    <header className={styles.Header}>
      {/* alt */}
      <Icon source={currentIcon.src} alt={currentIcon.alt} onClick={handleClick} />
    </header>
  );
};

export default Header;
