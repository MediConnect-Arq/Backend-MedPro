import { Injectable } from "@nestjs/common";
import { CreateAppointmentDto } from "src/application/appointment/dtos/create-appointment.dto";
import { UpdateAppointmentDto } from "src/application/appointment/dtos/update-appointment.dto";
import { AppointmentRepository } from "../repositories/appointment.repository";

@Injectable()
export class AppointmentService{
    constructor(private readonly appointmentRepository: AppointmentRepository) {}

    create(createAppointmentDto: CreateAppointmentDto){
        return this.appointmentRepository.create(createAppointmentDto);
    }

    findAll(){
        return this.appointmentRepository.findAll();
    }

    findOne(id: number){
        return this.appointmentRepository.findOne(id);
    }

    update(id: number, updateAppointmentDto: UpdateAppointmentDto){
        return this.appointmentRepository.update(id, updateAppointmentDto);
    }

    remove(id: number){
        return this.appointmentRepository.remove(id);
    }
}