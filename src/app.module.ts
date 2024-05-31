import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './application/account/user.module';
import { ChatbotModule } from './application/chatbot/chatbot.module';
import { ScheduleModule } from './application/schedule/schedule.module';

@Module({
  imports: [UserModule, ChatbotModule, ScheduleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}