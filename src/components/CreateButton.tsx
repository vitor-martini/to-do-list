import styles from './CreateButton.module.css';
import { PlusCircle } from 'phosphor-react';

export function CreateButton() {
  return (
    <button
     className={styles['create-button']}
     >
      Criar
      <PlusCircle size={20}/>
    </button>
  );
}