import React, { useState } from 'react';

import data from '../../data.json';

import Icon from '../Icon';
import Input from '../Input';

import styles from './Screen.module.css';

const Screen = () => {
  const [icon, setIcon] = useState({
    source: data.icons.history.src,
    alt: data.icons.history.alt
  });

  const handleIconChange = () => {
    if (icon.source === data.icons.history.src) {
      setIcon({
        source: data.icons.back.src,
        alt: data.icons.back.alt
      });
    } else {
      setIcon({
        source: data.icons.history.src,
        alt: data.icons.history.alt
      });
    }
  };

  return (
    <section className={styles.Screen}>
      <div className={styles.Header}>
        <Icon source={icon.source} alt={icon.alt} onClick={handleIconChange} />
      </div>
      <Input>{21}</Input>
    </section>
  );
};

export default Screen;
