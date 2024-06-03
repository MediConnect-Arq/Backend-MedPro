import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { DiagnosesService } from "src/domain/appointment/services/diagnoses.service";
import { CreateDiagnosesDto } from "../dtos/create-diagnoses.dto";
import { UpdateDiagnosesDto } from "../dtos/update-diagnoses.dto";

@Controller('diagnoses')
export class DiagnosesController {
    constructor(private readonly diagnosesService: DiagnosesService) {}

    @Post()
    create(@Body() createDiagnosesDto: CreateDiagnosesDto){
        return this.diagnosesService.create(createDiagnosesDto);
    }

    @Get()
    findAll(){
        return this.diagnosesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.diagnosesService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateDiagnosesDto: UpdateDiagnosesDto){
        return this.diagnosesService.update(+id, updateDiagnosesDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.diagnosesService.remove(+id);
    }
}