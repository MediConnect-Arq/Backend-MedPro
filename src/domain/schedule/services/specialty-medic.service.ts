import { Injectable } from "@nestjs/common";
import { CreateSpecialtyMedicDto } from "src/application/schedule/dtos/create-specialty-medic.dto";
import { UpdateSpecialtyMedicDto } from "src/application/schedule/dtos/update-specialty-medic.dto";
import { SpecialtyMedicRepository } from "../repositories/specialty-medic.repository";

@Injectable()
export class SpecialtyMedicService{
    constructor(private readonly specialtyMedicRepository: SpecialtyMedicRepository) {}
   
    create(createSpecialMedicDto: CreateSpecialtyMedicDto){
        return this.specialtyMedicRepository.create(createSpecialMedicDto);
    }

    findAll(){
        return this.specialtyMedicRepository.findAll();
    }
    
    findOne(id: number){
        return this.specialtyMedicRepository.findOne(id);
    }

    update(id: number, updateSpecialtyMedicDto: UpdateSpecialtyMedicDto){
        return this.specialtyMedicRepository.update(id, updateSpecialtyMedicDto);
    }

    remove(id: number){
        return this.specialtyMedicRepository.remove(id);
    }
}