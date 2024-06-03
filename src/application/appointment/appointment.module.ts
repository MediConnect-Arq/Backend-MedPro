import { Module } from "@nestjs/common";
import { UserRepository } from "src/domain/account/repositories/user.repository";
import { AppointmentRepository } from "src/domain/appointment/repositories/appointment.repository";
import { DiagnosesRepository } from "src/domain/appointment/repositories/diagnoses.repository";
import { PrescriptionRepository } from "src/domain/appointment/repositories/prescription.repository";
import { AppointmentService } from "src/domain/appointment/services/appointment.service";
import { DiagnosesService } from "src/domain/appointment/services/diagnoses.service";
import { PrescriptionService } from "src/domain/appointment/services/prescription.service";
import { PrismaModule } from "src/infrastructure/prisma/prisma.module";
import { PrismaService } from "src/infrastructure/prisma/prisma.service";
import { UserModule } from "../account/user.module";
import { AppointmentController } from "./controllers/appointment.controller";
import { DiagnosesController } from "./controllers/diagnoses.controller";
import { PrescriptionController } from "./controllers/prescription.controller";

@Module({
    imports: [UserModule, PrismaModule],
    controllers: [
        AppointmentController,
        DiagnosesController,
        PrescriptionController,
    ],
    providers: [
        PrismaService,
        AppointmentService,
        AppointmentRepository,
        DiagnosesService,
        DiagnosesRepository,
        PrescriptionService,
        PrescriptionRepository,
        UserRepository,
    ],
})
export class AppointmentModule {}