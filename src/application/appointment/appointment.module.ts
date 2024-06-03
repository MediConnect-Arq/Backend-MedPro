import { Module } from "@nestjs/common";
import { UserRepository } from "src/domain/account/repositories/user.repository";
import { AppointmentRepository } from "src/domain/appointment/repositories/appointment.repository";
import { DiagnosesRepository } from "src/domain/appointment/repositories/diagnoses.repository";
import { AppointmentService } from "src/domain/appointment/services/appointment.service";
import { DiagnosesService } from "src/domain/appointment/services/diagnoses.service";
import { PrismaModule } from "src/infrastructure/prisma/prisma.module";
import { UserModule } from "../account/user.module";
import { AppointmentController } from "./controllers/appointment.controller";
import { DiagnosesController } from "./controllers/diagnoses.controller";

@Module({
    imports: [UserModule, PrismaModule],
    controllers: [
        AppointmentController,
        DiagnosesController,
    ],
    providers: [
        AppointmentService,
        AppointmentRepository,
        DiagnosesService,
        DiagnosesRepository,
        UserRepository,
    ],
})
export class AppointmentModule {}