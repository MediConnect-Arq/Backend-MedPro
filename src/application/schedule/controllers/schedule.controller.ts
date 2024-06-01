import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ScheduleService } from "src/domain/schedule/services/schedule.service";
import { CreateScheduleDto } from "../dtos/create-schedule.dto";
import { UpdateScheduleDto } from "../dtos/update-schedule.dto";

@Controller('schedules')
export class ScheduleController {
    constructor(private readonly scheduleService: ScheduleService){}

    @Post()
    create (@Body() CreateScheduleDto: CreateScheduleDto){
        return this.scheduleService.create(CreateScheduleDto);
    }

    @Get()
    findAll(){
        return this.scheduleService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.scheduleService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id:string, @Body() updateScheduleDto: UpdateScheduleDto){
        return this.scheduleService.update(+id, updateScheduleDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.scheduleService.remove(+id);
    }
}