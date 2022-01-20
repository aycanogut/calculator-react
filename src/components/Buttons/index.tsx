import React from 'react';

import { DisplayValues } from '../Calculator';

import Button from '../Button';

import styles from './Buttons.module.css';

const Buttons = ({ displayValue, setDisplayValue }: DisplayValues) => {
  const updateDisplay = (e: any) => {
    setDisplayValue(displayValue.concat(e.target.textContent));
  };

  return (
    <section className={styles.Buttons}>
      <Button variant="operator" onClick={updateDisplay}>
        C
      </Button>
      <Button variant="operator" onClick={updateDisplay}>
        ⌫
      </Button>
      <Button variant="operator" onClick={updateDisplay}>
        %
      </Button>
      <Button variant="operator" onClick={updateDisplay}>
        ÷
      </Button>
      <Button variant="number" onClick={updateDisplay}>
        7
      </Button>
      <Button variant="number" onClick={updateDisplay}>
        8
      </Button>
      <Button variant="number" onClick={updateDisplay}>
        9
      </Button>
      <Button variant="operator" onClick={updateDisplay}>
        &times;
      </Button>
      <Button variant="number" onClick={updateDisplay}>
        4
      </Button>
      <Button variant="number" onClick={updateDisplay}>
        5
      </Button>
      <Button variant="number" onClick={updateDisplay}>
        6
      </Button>
      <Button variant="operator" onClick={updateDisplay}>
        -
      </Button>
      <Button variant="number" onClick={updateDisplay}>
        1
      </Button>
      <Button variant="number" onClick={updateDisplay}>
        2
      </Button>
      <Button variant="number" onClick={updateDisplay}>
        3
      </Button>
      <Button variant="operator" onClick={updateDisplay}>
        +
      </Button>
      <Button variant="number" onClick={updateDisplay}>
        +/-
      </Button>
      <Button variant="number" onClick={updateDisplay}>
        0
      </Button>
      <Button variant="number" onClick={updateDisplay}>
        .
      </Button>
      <Button variant="equal" onClick={updateDisplay}>
        =
      </Button>
    </section>
  );
};

export default Buttons;
