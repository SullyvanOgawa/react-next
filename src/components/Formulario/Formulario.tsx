import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles/Cycles';
import { DefaultButton } from '../DefaultButtton/DefaultButton';
import { DefaultInput } from '../DefaultInput/DefaultInput';
import styles from './Formulario.module.css';

export function Formulario() {
  return (
    <form className={styles.formContainer} action=''>
      <div className={styles.forRow}>
        <DefaultInput
          labelText='Task'
          id='task'
          type='text'
          placeholder='Digite algo'
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
