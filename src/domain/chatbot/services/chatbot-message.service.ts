import { Injectable } from '@nestjs/common';
import { CreateChatbotMessageDto } from '../../../application/chatbot/dtos/create-chatbot-message.dto';
import { UpdateChatbotMessageDto } from '../../../application/chatbot/dtos/update-chatbot-message.dto';
import { ChatbotMessageRepository } from '../repositories/chatbot-message.repository';

@Injectable()
export class ChatbotMessageService {
  constructor(private readonly chatbotMessageRepository: ChatbotMessageRepository) {}

  create(createChatbotMessageDto: CreateChatbotMessageDto) {
    return this.chatbotMessageRepository.create(createChatbotMessageDto);
  }

  findAll() {
    return this.chatbotMessageRepository.findAll();
  }

  findOne(id: number) {
    return this.chatbotMessageRepository.findOne(id);
  }

  update(id: number, updateChatbotMessageDto: UpdateChatbotMessageDto) {
    return this.chatbotMessageRepository.update(id, updateChatbotMessageDto);
  }

  remove(id: number) {
    return this.chatbotMessageRepository.remove(id);
  }
}
