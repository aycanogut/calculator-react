import React, { MouseEventHandler } from 'react';
import IcoMoon from 'react-icomoon';

const iconSet = require('./selection.json');

import styles from './Icon.module.css';

export interface IconProps {
  icon: string;
  onClick?: MouseEventHandler<Element>;
}

const Icon = (props: IconProps) => {
  return <IcoMoon iconSet={iconSet} className={styles.Icon} {...props} />;
};

export default Icon;
