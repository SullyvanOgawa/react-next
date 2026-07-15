import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles/Cycles';
import { DefaultButton } from '../DefaultButtton/DefaultButton';
import { DefaultInput } from '../DefaultInput/DefaultInput';
import type { TaskModel } from '../../models/TaskModel';
import { useRef} from 'react';
import styles from './Formulario.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function Formulario() {
  
  // const [taskName, setTaskName] = useState('');
  const {state, setState} = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if(taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if(!taskName){
      alert('Por favor, digite uma tarefa válida.');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptedDate: null,
      duration: 1,
      type: 'workTime',
    };


    const secondsRemaining = newTask.duration * 60;
    
    setState(prevState => {
      return {
        ...prevState,
        config: {...prevState.config},
        activeTask: newTask,
        currentCircle: 1, // conferir depois
        secondsRemaining,
        formattedSecondsRemaining: '00:00',
        tasks: [...prevState.tasks, newTask],
      }
    });
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.formContainer} action=''>
      <div className={styles.forRow}>
        <DefaultInput
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
          // value={taskName}
          // onChange={(event) => setTaskName(event.target.value)} - pegue o valor digitado e atualize o estado
          ref={taskNameInput}
        />
      </div>

      <div className={styles.forRow}>
        <Cycles />
      </div>

      <div className={styles.forRow}>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
