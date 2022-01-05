import React from 'react';

import data from '../../data.json';

import Icon from '../Icon';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.Header}>
      <Icon source={data.icons.back.src} alt={data.icons.back.alt} />
    </header>
  );
};

export default Header;
