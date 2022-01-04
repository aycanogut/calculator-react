import React from 'react';

import data from '../../data.json';

import Icon from '../Icon';
import Input from '../Input';

import styles from './Screen.module.css';

const Screen = () => {
  return (
    <section className={styles.Screen}>
      <div className={styles.Header}>
        <Icon source={data.icons.history.src} alt={data.icons.history.alt} />
      </div>
      <Input>{21}</Input>
    </section>
  );
};

export default Screen;
