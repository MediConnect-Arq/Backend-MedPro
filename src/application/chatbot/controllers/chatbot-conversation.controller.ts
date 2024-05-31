import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ChatbotConversationService } from 'src/domain/chatbot/services/chatbot-conversation.service';
import { CreateChatbotConversationDto } from '../dtos/create-chatbot-conversation.dto';
import { UpdateChatbotConversationDto } from '../dtos/update-chatbot-conversation.dto';

@Controller('chconversations')
export class ChatbotConversationController {
  constructor(private readonly chatbotConversationService: ChatbotConversationService) {}

  @Post()
  create(@Body() createChatbotConversationDto: CreateChatbotConversationDto) {
    return this.chatbotConversationService.create(createChatbotConversationDto);
  }

  @Get()
  findAll() {
    return this.chatbotConversationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatbotConversationService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateChatbotConversationDto: UpdateChatbotConversationDto) {
    return this.chatbotConversationService.update(+id, updateChatbotConversationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatbotConversationService.remove(+id);
  }
}
