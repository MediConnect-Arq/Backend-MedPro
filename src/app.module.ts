import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './application/account/user.module';
import { AppointmentModule } from './application/appointment/appointment.module';
import { ChatbotModule } from './application/chatbot/chatbot.module';
import { ScheduleModule } from './application/schedule/schedule.module';

@Module({
  imports: [UserModule, ChatbotModule, ScheduleModule, AppointmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}