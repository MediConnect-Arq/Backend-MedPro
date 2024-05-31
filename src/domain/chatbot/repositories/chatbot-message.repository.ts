import { Injectable } from '@nestjs/common';
import { UpdateChatbotMessageDto } from 'src/application/chatbot/dtos/update-chatbot-message.dto';
import { CreateChatbotMessageDto } from '../../../application/chatbot/dtos/create-chatbot-message.dto';
import { PrismaService } from '../../../infrastructure/prisma/prisma.service';

@Injectable()
export class ChatbotMessageRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateChatbotMessageDto) {
    const prismaData = {
        content: data.content,
        is_user_message: !!data.is_user_message,
        chatbot_conversations : { connect: { id: data.chatbot_conversation_id } },        
    };
    return this.prisma.chatbot_messages.create({ data: prismaData});
  }

  async findAll() {
    return this.prisma.chatbot_messages.findMany();
  }

  async findOne(id: number) {
    return this.prisma.chatbot_messages.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateChatbotMessageDto) {
    const prismaData = {
        content: data.content,
        is_user_message: !!data.is_user_message,
        chatbot_conversations : { connect: { id: data.chatbot_conversation_id } },
        };

    return this.prisma.chatbot_messages.update({ where: { id }, data: prismaData, });
  }

  async remove(id: number) {
    return this.prisma.chatbot_messages.delete({ where: { id } });
  }
}
