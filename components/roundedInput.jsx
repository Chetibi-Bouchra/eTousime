import React from 'react';
import styles from '../styles/styles.module.css'; // Import the component's CSS module

const RoundedInput = ({ value, onChange }) => {
  return (
    <input
      className={styles.roundedInput}
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Enter text"
    />
  );
};

export default RoundedInput;
