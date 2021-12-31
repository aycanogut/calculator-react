import React from 'react';
import styles from './Buttons.module.css';
import Button from '../Button';

const Buttons = () => {
  return (
    <section className={styles.Buttons}>
      <Button variant="operator">⌫</Button>
      <Button variant="operator">C</Button>
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
