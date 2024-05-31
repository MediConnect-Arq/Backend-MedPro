export class CreateChatbotMessageDto {
    content: string;
    is_user_message: boolean;
    chatbot_conversation_id: number;
}