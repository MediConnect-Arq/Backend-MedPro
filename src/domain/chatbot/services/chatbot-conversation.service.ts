import { Injectable } from '@nestjs/common';
import { CreateChatbotConversationDto } from '../../../application/chatbot/dtos/create-chatbot-conversation.dto';
import { UpdateChatbotConversationDto } from '../../../application/chatbot/dtos/update-chatbot-conversation.dto';
import { ChatbotConversationRepository } from '../repositories/chatbot-conversation.repository';

@Injectable()
export class ChatbotConversationService {
  constructor(private readonly chatbotConversationRepository: ChatbotConversationRepository) {}

  create(createChatbotConversationDto: CreateChatbotConversationDto) {
    return this.chatbotConversationRepository.create(createChatbotConversationDto);
  }

  findAll() {
    return this.chatbotConversationRepository.findAll();
  }

  findOne(id: number) {
    return this.chatbotConversationRepository.findOne(id);
  }

  update(id: number, updateChatbotConversationDto: UpdateChatbotConversationDto) {
    return this.chatbotConversationRepository.update(id, updateChatbotConversationDto);
  }

  remove(id: number) {
    return this.chatbotConversationRepository.remove(id);
  }
}
