import { Module } from "@nestjs/common";
import { tasksController } from "./tasks.controller";
import { TasksService } from "./tasks.service";

@Module({
    providers: [TasksService],
    controllers:[tasksController],
})
export class TasksModule {}