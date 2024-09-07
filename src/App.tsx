import { Task, TaskType } from './components/Task.tsx';
import { Input } from './components/Input.tsx';
import { CreateButton } from './components/CreateButton.tsx';
import logo from './assets/rocket.svg';
import styles from './App.module.css';
import './global.css';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { ClipboardText } from 'phosphor-react';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  function getCssVariableValue(variable: string) {
    return getComputedStyle(document.documentElement).getPropertyValue(variable);
  }

  function handleAddNewTask() {
    if(newTask.length === 0) {
      toast.error('Informe o conteúdo da tarefa!', {
        style: {
          backgroundColor: getCssVariableValue('--gray-600'), 
          color: getCssVariableValue('--gray-100') 
        }
      });
      
      return;
    }

    const task = {
      id: uuidv4(),
      content: newTask,
      done: false
    };

    setTasks([...tasks, task]);
    setNewTask('');
  }

  function deleteTask(id: string) {
    setTasks(tasks.filter(t => t.id !== id));
  }

  function doTask(task: TaskType) {
    const updatedTasks = tasks.map(t => {
      if(t.id === task.id) {
        return {...t, done: !t.done};
      }
      return t;
    });

    setTasks(updatedTasks);
  }

  return (
    <div>
      <header className={styles.header}>
        <img src={logo} />
        <h1><span>to</span><span>do</span></h1>
      </header>
      <main className={styles.main}>
        <div className={styles.add}>
          <Input
            placeholder='Adicione uma nova tarefa'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <CreateButton
            onClick={handleAddNewTask}
          />
        </div>
        <div className={styles.info}>
          <div>
            <p className={styles.created}>Tarefas criadas</p>
            <span>{tasks.length}</span>
          </div>
          <div>
            <p className={styles.done}>Concluídas</p>
            <span>{tasks.filter(x => x.done).length} de {tasks.length}</span>
          </div>
          
        </div>
        <div className={styles.tasks}>
          {
            tasks.length === 0 ? (
              <div className={styles.empty}>
                <ClipboardText size={64} />
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            ) : (
              <div className={styles.fill}>
                {
                  tasks.map(t => (
                    <Task
                      key={t.id}
                      task={t}
                      onDoTask={doTask}
                      onDeleteTask={deleteTask}
                    />
                  ))
                }
              </div>
            )
          }
        </div>
      </main>
      <ToastContainer />
    </div>
  );
}
