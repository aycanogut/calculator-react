import React, { useEffect, MouseEventHandler } from 'react';
import IcoMoon from 'react-icomoon';

const iconSet = require('../../utils/selection.json');

import styles from './Icon.module.css';

export interface Props {
  icon: string;
  onClick?: MouseEventHandler<Element>;
}

const Icon = (props: Props) => {
  return <IcoMoon iconSet={iconSet} className={styles.Icon} {...props} />;
};

export default Icon;
