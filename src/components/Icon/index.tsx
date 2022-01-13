import React, { useEffect, MouseEventHandler } from 'react';
import IcoMoon from 'react-icomoon';

const iconSet = require('../../utils/selection.json');

import styles from './Icon.module.css';

// types
export interface Props extends React.HTMLAttributes<HTMLImageElement> {
  icon: any;

  onClick: MouseEventHandler<Element>;
}

const Icon = ({ onClick, ...props }: Props) => {
  // update all svg items viewBox values
  useEffect(() => {
    const svg = document.querySelectorAll('svg');
    const svgArr = [...svg];

    svgArr.map((item) => item.setAttribute('viewBox', '0 0 32 32'));
  });

  return <IcoMoon iconSet={iconSet} className={styles.Icon} onClick={onClick} {...props} />;
};

export default Icon;
