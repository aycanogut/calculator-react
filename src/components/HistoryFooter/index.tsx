import React, { MouseEventHandler } from 'react';
import Icon from '../Icon';

import styles from './HistoryFooter.module.css';

export interface Props {
  setHistory?: any;
}

const Footer = ({ setHistory }: Props) => {
  const handleClick: MouseEventHandler = () => {
    setHistory([]); // set empty array to history to remove history layout
  };

  return (
    <footer className={styles.Footer}>
      <Icon icon="remove" onClick={handleClick} />
    </footer>
  );
};

export default Footer;
