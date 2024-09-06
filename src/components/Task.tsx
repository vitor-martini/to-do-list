import { CheckBox } from './CheckBox';
import { DeleteButton } from './DeleteButton';
import styles from './Tasx.module.css';

interface TaskProps {
  id: string;
  content: string;
  done: boolean;
}

export function Task({ id, content, done }: TaskProps) {

  function handleDelete(id: string) {
    console.log(`deleting id ${id}`);
  }

  return (
    <div className={styles.task}>
      <CheckBox check={done}/>
      <p
        className={done ? styles.done : ''}
      >{content}</p>
      <DeleteButton
        onClick={() => handleDelete(id)}
      />
    </div>
  );
}