import { Trash } from 'phosphor-react';
import styles from './DeleteButton.module.css';
import { ButtonHTMLAttributes } from 'react';

export function DeleteButton({...props}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={styles['delete-button']}
      {...props}
    >
      <Trash size={32} />
    </button>
  );
}