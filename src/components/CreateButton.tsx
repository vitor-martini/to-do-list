import { ButtonHTMLAttributes } from 'react';
import styles from './CreateButton.module.css';
import { PlusCircle } from 'phosphor-react';

export function CreateButton({...props}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
     className={styles['create-button']}
     {...props}
     >
      Criar
      <PlusCircle size={20}/>
    </button>
  );
}