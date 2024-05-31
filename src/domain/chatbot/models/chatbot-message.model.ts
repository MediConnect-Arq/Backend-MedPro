export class ChatbotMessage {
    id: number;
    content: string;
    is_user_message: boolean;
    chatbot_conversation_id: number;
    created_at: Date;
    updated_at?: Date;
}