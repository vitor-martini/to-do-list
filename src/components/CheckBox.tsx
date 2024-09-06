import styles from './CheckBox.module.css';

export function CheckBox() {
  return (
    <label className={styles.checkbox}>
        <input type="checkbox" />
        <span className={styles['custom-checkbox']}></span>
    </label>
  );
}