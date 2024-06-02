import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AppointmentService } from "src/domain/appointment/services/appointment.service";
import { CreateAppointmentDto } from "../dtos/create-appointment.dto";
import { UpdateAppointmentDto } from "../dtos/update-appointment.dto";

@Controller('appointments')
export class AppointmentController {
    constructor (private readonly appointmentService: AppointmentService) {}

    @Post()
    create(@Body() createAppointmentDto: CreateAppointmentDto){
        return this.appointmentService.create(createAppointmentDto);
    }

    @Get()
    findAll(){
        return this.appointmentService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.appointmentService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateAppointmentDto: UpdateAppointmentDto){
        return this.appointmentService.update(+id, updateAppointmentDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.appointmentService.remove(+id);
    }
}