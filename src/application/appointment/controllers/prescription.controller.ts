import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PrescriptionService } from "src/domain/appointment/services/prescription.service";
import { CreatePrescriptionDto } from "../dtos/create-prescription.dto";
import { UpdatePrescriptionDto } from "../dtos/update-prescription.dto";

@Controller('prescriptions')
export class PrescriptionController {
    constructor(private readonly prescriptionService: PrescriptionService) {}

    @Post()
    create(@Body() createPrescriptionDto: CreatePrescriptionDto){
        return this.prescriptionService.create(createPrescriptionDto);
    }

    @Get()
    findAll(){
        return this.prescriptionService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.prescriptionService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatePrescriptionDto: UpdatePrescriptionDto){
        return this.prescriptionService.update(+id, updatePrescriptionDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.prescriptionService.remove(+id)
    }
}