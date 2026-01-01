/**
 * Message
 * A Message
 */
export interface Message {
  id?: number;
  chatId: number;
  content: string;
  createdAt?: string | null;
  userId: string;
}