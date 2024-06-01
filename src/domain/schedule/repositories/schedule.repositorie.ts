import { Injectable } from "@nestjs/common";
import { CreateScheduleDto } from "src/application/schedule/dtos/create-schedule.dto";
import { UpdateScheduleDto } from "src/application/schedule/dtos/update-schedule.dto";
import { PrismaService } from "src/infrastructure/prisma/prisma.service";

@Injectable()
export class ScheduleRepository {
    constructor (
        private readonly prisma: PrismaService,
    ) {}

    async create(data: CreateScheduleDto) {
        const combinedDateTime = new Date(`${data.date}T${data.time}.000Z`);
        const prismaData = {
            date: new Date(data.date),
            time: combinedDateTime,
            specialty_medic: { connect: { id: data.specialty_id } },
        };
        return this.prisma.schedule.create({
        data: prismaData,
        });
    }

    async findAll(){
        return this.prisma.schedule.findMany({
            include: {
                specialty_medic: true,
            },
        });
    }

    async findOne(id: number){
        return this.prisma.schedule.findUnique({ 
            where: { id },
            include: {
                specialty_medic: true,
            },
        });
    }

    async update(id: number, data: UpdateScheduleDto) {
        const prismaData: any = {};
        if (data.date) {
          prismaData.date = new Date(data.date);
        }
      
        if (data.time) {
          prismaData.time = new Date(`1970-01-01T${data.time}.000Z`);
        }
      
        if (data.specialty_id) {
          prismaData.specialty_medic = { connect: { id: data.specialty_id } };
        }
      
        return this.prisma.schedule.update({
          where: { id },
          data: prismaData,
        });
      }
      
    async remove(id: number){
        return this.prisma.schedule.delete({
            where: { id },
        });
    }
}