import { Injectable } from "@nestjs/common";
import { CreateSpecialtyMedicDto } from "src/application/schedule/dtos/create-specialty-medic.dto";
import { UpdateSpecialtyMedicDto } from "src/application/schedule/dtos/update-specialty-medic.dto";
import { UserRepository } from "src/domain/account/repositories/user.repository";
import { PrismaService } from "src/infrastructure/prisma/prisma.service";

@Injectable()
export class SpecialtyMedicRepository{
    constructor (
        private readonly prisma: PrismaService,
        private userRepo: UserRepository,
    ) {}

    async create(data: CreateSpecialtyMedicDto) {
        const user = await this.userRepo.findMedic(data.medic_id, 2)

        if (!user) {
            throw new Error('User is not a psychologist');
        }

        const prismaData = {
            years: data.years,
            specialty: { connect: { id: data.specialty_id } },
            users: { connect: { id: data.medic_id } },
        };

        return this.prisma.specialty_medic.create({
          data: prismaData,
        });
    }

    async findAll(){
        return this.prisma.specialty_medic.findMany({
            include: {
                specialty: true,
                users: true,
            },
        });
    }

    async findOne(id: number){
        return this.prisma.specialty_medic.findUnique({ 
            where: { id },
            include: {
                specialty: true,
                users: true,
            },
        });
    }

    async update(id: number, data: UpdateSpecialtyMedicDto){
        const prismaData = {
            years: data.years,
            specialty: { connect: { id: data.specialty_id } },
            users: { connect: { id: data.medic_id } },
        };

        return this.prisma.specialty_medic.update({
            where: { id },
            data: prismaData,
        });
    }

    async remove(id: number){
        return this.prisma.specialty_medic.delete({ where: { id } });
    }
}