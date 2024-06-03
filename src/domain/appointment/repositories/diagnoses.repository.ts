import { Injectable } from "@nestjs/common";
import { CreateDiagnosesDto } from "src/application/appointment/dtos/create-diagnoses.dto";
import { UpdateDiagnosesDto } from "src/application/appointment/dtos/update-diagnoses.dto";
import { PrismaService } from "src/infrastructure/prisma/prisma.service";

@Injectable()
export class DiagnosesRepository {
    constructor (
        private readonly prisma: PrismaService,
    ) {}

    async create(data: CreateDiagnosesDto) {
        const prismaData = {
            description: data.description,
            appointments: {connect: {id: data.appointment_id}},
        };

        return this.prisma.diagnoses.create({
            data: prismaData,
        });
    }

    async findAll() {
        return this.prisma.diagnoses.findMany({
            include: {
                appointments: true,
            },
        });
    }

    async findOne(id: number) {
        return this.prisma.diagnoses.findUnique({
            where: { id },
            include: {
                appointments: true,
            },
        });
    }

    async update(id:number, data: UpdateDiagnosesDto){
        const prismaData = {
            description: data.description,
            appointments: {connect: {id: data.appointment_id}},
        };

        return this.prisma.diagnoses.update({
            where: { id },
            data: prismaData,
        });
    }

    async remove(id: number){
        return this.prisma.diagnoses.delete({
            where: { id },
        });
    }
}