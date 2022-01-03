import React from 'react';
import styles from './Screen.module.css';
import data from '../../data.json';
import Input from '../Input';
import Icon from '../Icon';

const Screen = () => {
  return (
    <section className={styles.Screen}>
      <div className={styles.Topper}>
        <Icon source={data.icons.history.src} alt={data.icons.history.alt} />
      </div>
      <Input>{21}</Input>
    </section>
  );
};

export default Screen;
