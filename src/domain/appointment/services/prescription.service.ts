import { Injectable } from "@nestjs/common";
import { CreatePrescriptionDto } from "src/application/appointment/dtos/create-prescription.dto";
import { UpdatePrescriptionDto } from "src/application/appointment/dtos/update-prescription.dto";
import { PrescriptionRepository } from "../repositories/prescription.repository";

@Injectable()
export class PrescriptionService{
    constructor(private readonly prescriptionRepository: PrescriptionRepository){}

    create(createPrescriptionDto: CreatePrescriptionDto){
        return this.prescriptionRepository.create(createPrescriptionDto);
    }

    findAll(){
        return this.prescriptionRepository.findAll();
    }

    findOne(id: number){
        return this.prescriptionRepository.findOne(id);
    }

    update(id: number, updatePrescriptionDto: UpdatePrescriptionDto){
        return this.prescriptionRepository.update(id, updatePrescriptionDto);
    }

    remove(id: number){
        return this.prescriptionRepository.remove(id);
    }
}