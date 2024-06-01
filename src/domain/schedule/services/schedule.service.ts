import { Injectable } from "@nestjs/common";
import { CreateScheduleDto } from "src/application/schedule/dtos/create-schedule.dto";
import { UpdateScheduleDto } from "src/application/schedule/dtos/update-schedule.dto";
import { ScheduleRepository } from "../repositories/schedule.repositorie";

@Injectable()
export class ScheduleService{
    constructor(private readonly scheduleRepository: ScheduleRepository) {}

    create(createScheduleDto: CreateScheduleDto){
        return this.scheduleRepository.create(createScheduleDto);
    }

    findAll(){
        return this.scheduleRepository.findAll();
    }

    findOne(id: number){
        return this.scheduleRepository.findOne(id);
    }

    update(id: number, updateScheduleDto: UpdateScheduleDto){
        return this.scheduleRepository.update(id, updateScheduleDto);
    }

    remove(id: number){
        return this.scheduleRepository.remove(id);
    }
}