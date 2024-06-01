import { Module } from '@nestjs/common';
import { UserRepository } from 'src/domain/account/repositories/user.repository';
import { ScheduleRepository } from 'src/domain/schedule/repositories/schedule.repositorie';
import { ScheduleService } from 'src/domain/schedule/services/schedule.service';
import { SpecialtyMedicRepository } from '../../domain/schedule/repositories/specialty-medic.repository';
import { SpecialtyMedicService } from '../../domain/schedule/services/specialty-medic.service';
import { PrismaModule } from '../../infrastructure/prisma/prisma.module';
import { UserModule } from '../account/user.module';
import { ScheduleController } from './controllers/schedule.controller';
import { SpecialtyMedicController } from './controllers/specialty-medic.controller';

@Module({
  imports: [UserModule,PrismaModule],
  controllers: [
    SpecialtyMedicController,
    ScheduleController,
  ],
  providers: [
    SpecialtyMedicService,
    SpecialtyMedicRepository,
    UserRepository,
    ScheduleService,
    ScheduleRepository
  ],
})
export class ScheduleModule {}
