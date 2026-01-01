/**
 * Memory
 * A Memory
 */
export interface Memory {
  id?: number;
  content: string;
  createdAt?: string | null;
  threadId: string;
  updatedAt?: string | null;
  userId: string;
}