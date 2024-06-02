import { Injectable } from "@nestjs/common";
import { CreateAppointmentDto } from "src/application/appointment/dtos/create-appointment.dto";
import { UpdateAppointmentDto } from "src/application/appointment/dtos/update-appointment.dto";
import { UserRepository } from "src/domain/account/repositories/user.repository";
import { PrismaService } from "src/infrastructure/prisma/prisma.service";

@Injectable()
export class AppointmentRepository{
    constructor (
        private readonly prisma: PrismaService,
        private userRepo: UserRepository,
    ) {}

    async create(data: CreateAppointmentDto){
        const todayDate = new Date().toISOString().split('T')[0];
        const combinedDateTime = new Date(`${todayDate}T${data.duration}.000Z`);
        const user = await this.userRepo.findPatient(data.patient_id, 1)

        if(!user){
            throw new Error('User is not a patient');
        }

        const prismaData = {
            duration: combinedDateTime.toISOString(),
            location: data.location,
            notes: data.notes || null,
            users: { connect: { id: data.patient_id } },
            schedule: { connect: { id: data.schedule_id } },
            appointments_status: {connect: {id: data.appointment_status_id}}
        };

        return this.prisma.appointments.create({
            data: prismaData,
        });
    }

    async findAll(){
        return this.prisma.appointments.findMany({
            include: {
                users: true,
                schedule: {
                    include: {
                      specialty_medic: true,
                    },
                },
                appointments_status: true,
            },
        });
    }

    async findOne(id: number){
        return this.prisma.appointments.findUnique({
            where: { id },
            include: {
                users: true,
                schedule: {
                    include: {
                      specialty_medic: true,
                    },
                },
                appointments_status: true,
            },
        });
    }

    async update(id: number, data: UpdateAppointmentDto){
        const todayDate = new Date().toISOString().split('T')[0];
        const combinedDateTime = new Date(`${todayDate}T${data.duration}.000Z`);
        const user = await this.userRepo.findPatient(data.patient_id, 1)

        if(!user){
            throw new Error('User is not a patient');
        }

        const prismaData = {
            duration: combinedDateTime.toISOString(),
            location: data.location,
            notes: data.notes || null,
            users: { connect: { id: data.patient_id } },
            schedule: { connect: { id: data.schedule_id } },
            appointments_status: {connect: {id: data.appointment_status_id}}
        };

        return this.prisma.appointments.update({
            where: { id },
            data: prismaData,
        });
    }

    async remove(id: number){
        return this.prisma.appointments.delete({ where: { id } });
    }
}