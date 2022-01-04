import React from 'react';

import data from '../../data.json';

import Icon from '../Icon';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Icon source={data.icons.garbage.src} alt={data.icons.garbage.alt} />
    </footer>
  );
};

export default Footer;
