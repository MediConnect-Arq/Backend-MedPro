import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './application/account/user.module';
import { ChatbotModule } from './application/chatbot/chatbot.module';

@Module({
  imports: [UserModule, ChatbotModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}