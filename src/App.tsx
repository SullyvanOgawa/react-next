
// import { Heading } from './components/Heading/Heading';

import { Home } from './pages/home/Home';
import './styles/global.css';
import './styles/themes.css';
import { useState } from 'react'; 
import type { TaskStateModel } from './models/TaskStateModel';
import { TaskContext } from './contexts/TaskContext/TaskContext';

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
}

export function App() {
  /*O useState é uma função nativa do React que permite adicionar e manipular "estados" (dados dinâmicos) em componentes funcionais. Ele é chamado de hook (termo em inglês que significa "gancho") porque permite que você "prenda" ou "conecte" seus componentes funcionais a recursos avançados do React, como o gerenciamento de estado e o ciclo de vida.*/
  // Sempre qur usar UseState, não vou usar atribuição deiretamente. Ex.: numero +=1;
 
  // const [numero, setNumero] = useState(0);

  // function handleClick(){
  //   setNumero(prevState => prevState + 1); // caso eu queira usar o estado anterior da variável.
  // }

  const [state, setState] = useState(initialState);
  
  return (
    <>
      <TaskContext.Provider value={{ state, setState }} >
        <Home />
      </TaskContext.Provider>
    </>
  );
}
