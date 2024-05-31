import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ChatbotMessageService } from 'src/domain/chatbot/services/chatbot-message.service';
import { CreateChatbotMessageDto } from '../dtos/create-chatbot-message.dto';
import { UpdateChatbotMessageDto } from '../dtos/update-chatbot-message.dto';

@Controller('chmessages')
export class ChatbotMessageController {
  constructor(private readonly chatbotMessageService: ChatbotMessageService) {}

  @Post()
  create(@Body() createChatbotMessageDto: CreateChatbotMessageDto) {
    return this.chatbotMessageService.create(createChatbotMessageDto);
  }

  @Get()
  findAll() {
    return this.chatbotMessageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatbotMessageService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateChatbotMessageDto: UpdateChatbotMessageDto) {
    return this.chatbotMessageService.update(+id, updateChatbotMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatbotMessageService.remove(+id);
  }
}
