import { Module } from '@nestjs/common';
//import { ScheduleRepository } from '../../domain/schedule/repositories/schedule.repository';
import { SpecialtyMedicRepository } from '../../domain/schedule/repositories/specialty-medic.repository';
//import { ScheduleService } from '../../domain/schedule/services/schedule.service';
import { SpecialtyMedicService } from '../../domain/schedule/services/specialty-medic.service';
import { PrismaModule } from '../../infrastructure/prisma/prisma.module';
//import { ScheduleController } from './controllers/schedule.controller';
import { UserRepository } from 'src/domain/account/repositories/user.repository';
import { UserModule } from '../account/user.module';
import { SpecialtyMedicController } from './controllers/specialty-medic.controller';

@Module({
  imports: [UserModule,PrismaModule],
  controllers: [
    SpecialtyMedicController,
    //ScheduleController,
  ],
  providers: [
    SpecialtyMedicService,
    SpecialtyMedicRepository,
    UserRepository
    //ScheduleService,
    //ScheduleRepository,
  ],
})
export class ScheduleModule {}
