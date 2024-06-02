import { Module } from "@nestjs/common";
import { UserRepository } from "src/domain/account/repositories/user.repository";
import { AppointmentRepository } from "src/domain/appointment/repositories/appointment.repository";
import { AppointmentService } from "src/domain/appointment/services/appointment.service";
import { PrismaModule } from "src/infrastructure/prisma/prisma.module";
import { UserModule } from "../account/user.module";
import { AppointmentController } from "./controllers/appointment.controller";

@Module({
    imports: [UserModule, PrismaModule],
    controllers: [
        AppointmentController
    ],
    providers: [
        AppointmentService,
        AppointmentRepository,
        UserRepository,
    ],
})
export class AppointmentModule {}