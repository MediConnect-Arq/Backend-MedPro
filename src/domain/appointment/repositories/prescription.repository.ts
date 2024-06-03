import { Injectable } from "@nestjs/common";
import { CreatePrescriptionDto } from "src/application/appointment/dtos/create-prescription.dto";
import { UpdatePrescriptionDto } from "src/application/appointment/dtos/update-prescription.dto";
import { PrismaService } from "src/infrastructure/prisma/prisma.service";

@Injectable()
export class PrescriptionRepository{
    constructor(private readonly prisma: PrismaService){}
    
    async create(data: CreatePrescriptionDto){
        const prismaData = {
            medication: data.medication,
            dosage: data.dosage,
            instruction: data.instructions,
            appointments: {connect: {id: data.appointmentId}},
        };

        return this.prisma.prescriptions.create({
            data: prismaData,
        });
    }

    async findAll(){
        return this.prisma.prescriptions.findMany({
            include: {
                appointments: true,
            },
        });
    }

    async findOne(id: number){
        return this.prisma.prescriptions.findUnique({
            where: {id},
            include: {
                appointments: true,
            },
        });
    }

    async update(id: number, data: UpdatePrescriptionDto){
        const prismaData = {
            medication: data.medication,
            dosage: data.dosage,
            instruction: data.instructions,
            appointments: {connect: {id: data.appointmentId}},
        };

        return this.prisma.prescriptions.update({
            where: {id},
            data: prismaData,
        });
    }

    async remove(id: number){
        return this.prisma.prescriptions.delete({
            where: {id},
        });
    }   
}