// Aqui vai ficar o estado completo da aplicação.

import type { TaskModel } from "./TaskModel";


export type TaskStateModel = {
    tasks: TaskModel[]; // array de tarefas
    secondsRemaining: number; // segundos restantes da tarefa atual
    formattedSecondsRemaining: string; // segundos restantes formatados (ex: 00:00)
    activeTask: TaskModel | null; // tarefa ativa (a que está sendo executada no momento)
    currentCycle: number; // ciclo atual (quantas vezes a tarefa foi executada) que vai de 1 á 8
    config: {
        workTime: number; // tempo de trabalho em segundos
        shortBreakTime: number; // tempo de intervalo curto em segundos
        longBreakTime: number; // tempo de intervalo longo em segundos
    };
}