import React, { MouseEventHandler } from 'react';

import icons from '../../data.json';

import Icon from '../Icon';

import styles from './Header.module.css';

export interface Props {
  view: any;
  setView: Function;
}

const Header = ({ view, setView }: Props) => {
  const handleClick: MouseEventHandler = () => {
    view === 'calculator' ? setView('history') : setView('calculator');
  };

  const currentIcon = view === 'calculator' ? icons.history : icons.back;

  return (
    <header className={styles.Header}>
      {/* alt */}
      <Icon source={currentIcon.src} alt={currentIcon.alt} onClick={handleClick} />
    </header>
  );
};

export default Header;
