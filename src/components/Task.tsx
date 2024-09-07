import { CheckBox } from './CheckBox';
import { DeleteButton } from './DeleteButton';
import styles from './Tasx.module.css';

export interface TaskType { 
  id: string;
  content: string;
  done: boolean;
}

interface TaskProps {
  task: TaskType,
  onDoTask: (task: TaskType) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({ task, onDoTask, onDeleteTask }: TaskProps) {
  return (
    <div className={styles.task}>
      <CheckBox 
        check={task.done}
        onChange={() => onDoTask(task)}
      />
      <p
        className={task.done ? styles.done : ''}
      >{task.content}</p>
      <DeleteButton
        onClick={() => onDeleteTask(task.id)}
      />
    </div>
  );
}