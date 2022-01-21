import React from 'react';

import Button from '../Button';

import styles from './Buttons.module.css';

export interface DisplayValues {
  displayValue: string;
  setDisplayValue: Function;
}

const Buttons = ({ displayValue, setDisplayValue }: DisplayValues) => {
  const updateDisplay = (e: any) => {
    const display = e.target.textContent;

    if (displayValue === '0') {
      setDisplayValue(display);
    } else {
      setDisplayValue(displayValue.concat(display));
    }
  };

  return (
    <section className={styles.Buttons}>
      <Button variant="operator" onClick={updateDisplay} value="C" />
      <Button variant="operator" onClick={updateDisplay} value="⌫" />
      <Button variant="operator" onClick={updateDisplay} value="%" />
      <Button variant="operator" onClick={updateDisplay} value="÷" />
      <Button variant="number" onClick={updateDisplay} value="7" />
      <Button variant="number" onClick={updateDisplay} value="8" />
      <Button variant="number" onClick={updateDisplay} value="9" />
      <Button variant="operator" onClick={updateDisplay} value="&times;" />
      <Button variant="number" onClick={updateDisplay} value="4" />
      <Button variant="number" onClick={updateDisplay} value="5" />
      <Button variant="number" onClick={updateDisplay} value="6" />
      <Button variant="operator" onClick={updateDisplay} value="-" />
      <Button variant="number" onClick={updateDisplay} value="1" />
      <Button variant="number" onClick={updateDisplay} value="2" />
      <Button variant="number" onClick={updateDisplay} value="3" />
      <Button variant="operator" onClick={updateDisplay} value="+" />
      <Button variant="number" onClick={updateDisplay} value="+/-" />
      <Button variant="number" onClick={updateDisplay} value="0" />
      <Button variant="number" onClick={updateDisplay} value="." />
      <Button variant="equal" onClick={updateDisplay} value="=" />
    </section>
  );
};

export default Buttons;
