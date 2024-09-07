import { InputHTMLAttributes } from 'react';
import styles from './CheckBox.module.css';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement>{
  check: boolean;
}

export function CheckBox({ check, ...rest }: CheckBoxProps) {
  return (
    <label className={styles.checkbox}>
        <input 
          type="checkbox" 
          checked={check}
          {...rest}
        />
        <span className={styles['custom-checkbox']}></span>
    </label>
  );
}