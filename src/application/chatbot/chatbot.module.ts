import { Module } from '@nestjs/common';
import { ChatbotConversationRepository } from '../../domain/chatbot/repositories/chatbot-conversation.repository';
import { ChatbotMessageRepository } from '../../domain/chatbot/repositories/chatbot-message.repository';
import { ChatbotConversationService } from '../../domain/chatbot/services/chatbot-conversation.service';
import { ChatbotMessageService } from '../../domain/chatbot/services/chatbot-message.service';
import { PrismaModule } from '../../infrastructure/prisma/prisma.module';
import { ChatbotConversationController } from './controllers/chatbot-conversation.controller';
import { ChatbotMessageController } from './controllers/chatbot-message.controller';

@Module({
  imports: [PrismaModule],
  controllers: [ChatbotConversationController, ChatbotMessageController],
  providers: [
    ChatbotConversationService,
    ChatbotMessageService,
    ChatbotConversationRepository,
    ChatbotMessageRepository,
  ],
})
export class ChatbotModule {}
