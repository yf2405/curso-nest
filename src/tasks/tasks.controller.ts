import { Controller, Delete, Get, Patch, Post, Put, Body } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import path from "path";
@Controller('/tasks')
export class tasksController {
    taskService: TasksService;
    constructor(taskService: TasksService){
        this.taskService = taskService;

    }

    @Get('/id')
    getTask(){
        return this.taskService.getTask(2);

    }
    @Get()
    getAllTasks(){
        return this.taskService.getTasks();

    }
    @Post()
    createTasks(@Body() task:any){
        return this.taskService.createTasks(task);

    }

    @Put()
    updateTasks() {
        return this.taskService.updateTasks();
    }
    @Delete()
    deleteTasks( ) {
        return this.taskService.deleteTasks();
    }
    @Patch()
    updateTasksStatus(){
        return this.taskService.updateTaskStatus();
    }
}