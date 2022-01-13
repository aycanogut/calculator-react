import React, { useEffect, MouseEventHandler } from 'react';
import IcoMoon from 'react-icomoon';

const iconSet = require('../../utils/selection.json');

import styles from './Icon.module.css';

// types
export interface Props {
  icon: string;
  onClick?: MouseEventHandler<Element>;
}

const Icon = ({ onClick, ...props }: Props) => {
  useEffect(() => {
    // update all svg items viewBox values
    const svg = document.querySelectorAll('svg');
    const svgArr = [...svg];

    svgArr.map((item) => item.setAttribute('viewBox', '0 0 32 32'));
  });

  return <IcoMoon iconSet={iconSet} className={styles.Icon} onClick={onClick} {...props} />;
};

export default Icon;
