import React from 'react';

import { DisplayValues } from '../Calculator';

import Button from '../Button';

import styles from './Buttons.module.css';

interface UpdateDisplayValues {
  e: MouseEvent;
  target: any;
}

const Buttons = ({ displayValue, setDisplayValue }: DisplayValues) => {
  const updateDisplay = (e: UpdateDisplayValues) => {
    setDisplayValue(displayValue.concat(e.target.textContent));
  };

  return (
    <section className={styles.Buttons}>
      <Button variant="operator">C</Button>
      <Button variant="operator">⌫</Button>
      <Button variant="operator">%</Button>
      <Button variant="operator">÷</Button>
      <Button variant="number">7</Button>
      <Button variant="number">8</Button>
      <Button variant="number">9</Button>
      <Button variant="operator">&times;</Button>
      <Button variant="number">4</Button>
      <Button variant="number">5</Button>
      <Button variant="number">6</Button>
      <Button variant="operator">-</Button>
      <Button variant="number">1</Button>
      <Button variant="number">2</Button>
      <Button variant="number">3</Button>
      <Button variant="operator">+</Button>
      <Button variant="number">+/-</Button>
      <Button variant="number">0</Button>
      <Button variant="number">.</Button>
      <Button variant="equal">=</Button>
    </section>
  );
};

export default Buttons;
