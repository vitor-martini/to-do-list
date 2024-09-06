import styles from './CheckBox.module.css';

interface CheckBoxProps {
  check: boolean;
}

export function CheckBox({ check }: CheckBoxProps) {
  return (
    <label className={styles.checkbox}>
        <input 
          type="checkbox" 
          checked={check}
        />
        <span className={styles['custom-checkbox']}></span>
    </label>
  );
}