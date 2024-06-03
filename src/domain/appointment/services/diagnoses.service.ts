import { Injectable } from "@nestjs/common";
import { CreateDiagnosesDto } from "src/application/appointment/dtos/create-diagnoses.dto";
import { UpdateDiagnosesDto } from "src/application/appointment/dtos/update-diagnoses.dto";
import { DiagnosesRepository } from "../repositories/diagnoses.repository";

@Injectable()
export class DiagnosesService{
    constructor(private readonly diagnosesRepository: DiagnosesRepository) {}

    create(createDiagnosesDto: CreateDiagnosesDto){
        return this.diagnosesRepository.create(createDiagnosesDto);
    }

    findAll(){
        return this.diagnosesRepository.findAll();
    }

    findOne(id: number){
        return this.diagnosesRepository.findOne(id);
    }

    update(id: number, updateDiagnosesDto: UpdateDiagnosesDto){
        return this.diagnosesRepository.update(id, updateDiagnosesDto);
    }

    remove(id: number){
        return this.diagnosesRepository.remove(id);
    }
}