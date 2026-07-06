
export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: Number | null; // quando a tarefa for concluída, o completeDate vai receber a data de conclusão. Caso contrário, ele será nulo.
  interruptedDate: number | null; // quando a tarefa for interrompida, o interruptedDate vai receber a data de interrupção. Caso contrário, ele será nulo.
  type: 'workTime' | 'shortBreakTime' | 'longBreakTime'; // o type vai indicar se a tarefa é de trabalho, de intervalo curto ou de intervalo longo.
};