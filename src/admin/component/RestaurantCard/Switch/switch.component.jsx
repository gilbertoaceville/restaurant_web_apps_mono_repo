import React from 'react';
import './switch.styles.js';
import { Container } from './switch.styles.js';

export const Switch = () => {
  return (
    <Container>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </Container>
  );
};

