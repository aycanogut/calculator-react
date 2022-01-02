import React from 'react';
import styles from './Wrapper.module.css';

// types
export interface Props extends React.HTMLAttributes<HTMLImageElement> {
  source: string;
  alt: string;
}

const Icon = ({ source, alt }: Props) => {
  return (
    <div className={styles.Icon}>
      <img src={source} alt={alt} />
    </div>
  );
};

export default Icon;
