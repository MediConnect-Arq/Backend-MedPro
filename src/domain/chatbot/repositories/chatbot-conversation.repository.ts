import { Injectable } from '@nestjs/common';
import { CreateChatbotConversationDto } from '../../../application/chatbot/dtos/create-chatbot-conversation.dto';
import { UpdateChatbotConversationDto } from '../../../application/chatbot/dtos/update-chatbot-conversation.dto';
import { PrismaService } from '../../../infrastructure/prisma/prisma.service';

@Injectable()
export class ChatbotConversationRepository {
constructor(private readonly prisma: PrismaService) {}

async create(data: CreateChatbotConversationDto) {
    const prismaData = {
            start_date : new Date().toISOString(),
            end_date   : data.end_date,
            users      : { connect: { id: data.user_id } },
    };

    return this.prisma.chatbot_conversations.create({ data: prismaData});
}

async findAll() {
    return this.prisma.chatbot_conversations.findMany();
}

  async findOne(id: number) {
    return this.prisma.chatbot_conversations.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateChatbotConversationDto) {
     const prismaData = {
      start_date: new Date().toISOString(),
      end_date: data.end_date,
      users: { connect: { id: data.user_id } },
    };
  
    return this.prisma.chatbot_conversations.update({
      where: { id },
      data: prismaData,
    });
  }

  async remove(id: number) {
    return this.prisma.chatbot_conversations.delete({ where: { id } });
  }
}
