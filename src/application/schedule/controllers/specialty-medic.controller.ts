import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { SpecialtyMedicService } from "src/domain/schedule/services/specialty-medic.service";
import { CreateSpecialtyMedicDto } from "../dtos/create-specialty-medic.dto";
import { UpdateSpecialtyMedicDto } from "../dtos/update-specialty-medic.dto";

@Controller('smedic')
export class SpecialtyMedicController {
    constructor(private readonly specialtyMedicService: SpecialtyMedicService) {}

    @Post()
    create(@Body() CreateSpecialtyMedicDto: CreateSpecialtyMedicDto){
        return this.specialtyMedicService.create(CreateSpecialtyMedicDto);
    }

    @Get()
    findAll(){
        return this.specialtyMedicService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.specialtyMedicService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateSpecialtyMedicDto: UpdateSpecialtyMedicDto){
        return this.specialtyMedicService.update(+id, updateSpecialtyMedicDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.specialtyMedicService.remove(+id);
    }
}