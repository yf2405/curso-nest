import { Injectable, NotFoundException } from "@nestjs/common";


@Injectable()
export class TasksService {
    private task = []


    getTask(id: number){
        const taskFound = this.task.find(task => task.id === id);

        if(!taskFound){
          return new  NotFoundException(`the task id${id} not found`); 
        }

        return taskFound
    }
    getTasks(){
        return this.task;
    }
    createTasks(task){
        console.log(task);
        this.task.push({
            ...task,
            id: this.task.length + 1,
        });
        return task
    }
    updateTasks(){
        return 'actualizando tarea'
    }
    deleteTasks(){
        return 'Eliminando  tarea'
    }
    updateTaskStatus(){
        return 'actualizando estado de tarea'
    }
}