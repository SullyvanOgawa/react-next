import { DefaultInput } from '../DefaultInput/DefaultInput';
import styles from './Formulario.module.css';
export function Formulario() {
  return (
    <form className={styles.formContainer} action=''>
      <div className={styles.forRow}>
       <DefaultInput id='task' type='text' />
      </div>

      <div className={styles.forRow}>
        <span>Lorem ipsum dolor sit amet.</span>
      </div>

      <div className={styles.forRow}>
        <span>Ciclos</span>
        <span>0 0 0 0 0</span>
      </div>

      <div className={styles.forRow}>
        <button>Enviar</button>
      </div>
    </form>
  );
}
