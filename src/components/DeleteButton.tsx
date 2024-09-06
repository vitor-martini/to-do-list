import { Trash } from 'phosphor-react';
import styles from './DeleteButton.module.css';

export function DeleteButton() {
  return (
    <button
      className={styles['delete-button']}
    >
      <Trash size={32} />
    </button>
  );
}