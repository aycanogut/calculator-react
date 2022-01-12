import React, { MouseEventHandler } from 'react';

import icons from '../../data.json';

import Icon from '../Icon';

import styles from './Footer.module.css';

export interface Props {
  setHistory?: any;
}

const Footer = ({ setHistory }: Props) => {
  const handleClick: MouseEventHandler = () => {
    setHistory([]); // set empty array to history
  };

  return (
    <footer className={styles.Footer}>
      <Icon source={icons.garbage.src} alt={icons.garbage.alt} onClick={handleClick} />
    </footer>
  );
};

export default Footer;
