import { type GetHeadersOptions, type PlatformaticClientOptions, type StatusCode1xx, type StatusCode2xx, type StatusCode3xx, type StatusCode4xx, type StatusCode5xx } from 'massimo'
import { type FormData } from 'undici'

export type Memories = {
  /**
   * Get messages.
   *
   * Fetch messages from the database.
   * @param req - request parameters object
   * @returns the API response
   */
  getMessages(req: GetMessagesRequest): Promise<GetMessagesResponses>;
  /**
   * Create message.
   *
   * Add new message to the database.
   * @param req - request parameters object
   * @returns the API response
   */
  createMessage(req: CreateMessageRequest): Promise<CreateMessageResponses>;
  /**
   * Update messages.
   *
   * Update one or more messages in the database.
   * @param req - request parameters object
   * @returns the API response
   */
  updateMessages(req: UpdateMessagesRequest): Promise<UpdateMessagesResponses>;
  /**
   * Get Message by id.
   *
   * Fetch Message using its id from the database.
   * @param req - request parameters object
   * @returns the API response
   */
  getMessageById(req: GetMessageByIdRequest): Promise<GetMessageByIdResponses>;
  /**
   * Update message.
   *
   * Update message in the database.
   * @param req - request parameters object
   * @returns the API response
   */
  updateMessage(req: UpdateMessageRequest): Promise<UpdateMessageResponses>;
  /**
   * Delete messages.
   *
   * Delete one or more messages from the Database.
   * @param req - request parameters object
   * @returns the API response
   */
  deleteMessages(req: DeleteMessagesRequest): Promise<DeleteMessagesResponses>;
  /**
   * Get chat for message.
   *
   * Fetch the chat for message from the database.
   * @param req - request parameters object
   * @returns the API response
   */
  getChatForMessage(req: GetChatForMessageRequest): Promise<GetChatForMessageResponses>;
  /**
   * Get chats.
   *
   * Fetch chats from the database.
   * @param req - request parameters object
   * @returns the API response
   */
  getChats(req: GetChatsRequest): Promise<GetChatsResponses>;
  /**
   * Create chat.
   *
   * Add new chat to the database.
   * @param req - request parameters object
   * @returns the API response
   */
  createChat(req: CreateChatRequest): Promise<CreateChatResponses>;
  /**
   * Update chats.
   *
   * Update one or more chats in the database.
   * @param req - request parameters object
   * @returns the API response
   */
  updateChats(req: UpdateChatsRequest): Promise<UpdateChatsResponses>;
  /**
   * Get Chat by id.
   *
   * Fetch Chat using its id from the database.
   * @param req - request parameters object
   * @returns the API response
   */
  getChatById(req: GetChatByIdRequest): Promise<GetChatByIdResponses>;
  /**
   * Update chat.
   *
   * Update chat in the database.
   * @param req - request parameters object
   * @returns the API response
   */
  updateChat(req: UpdateChatRequest): Promise<UpdateChatResponses>;
  /**
   * Delete chats.
   *
   * Delete one or more chats from the Database.
   * @param req - request parameters object
   * @returns the API response
   */
  deleteChats(req: DeleteChatsRequest): Promise<DeleteChatsResponses>;
  /**
   * Get messages for chat.
   *
   * Fetch all the messages for chat from the database.
   * @param req - request parameters object
   * @returns the API response
   */
  getMessagesForChat(req: GetMessagesForChatRequest): Promise<GetMessagesForChatResponses>;
}
export interface FullResponse<T, U extends number> {
  'statusCode': U;
  'headers': Record<string, string>;
  'body': T;
}

export type GetMessagesRequest = {
  query?: {
    /**
     * Limit will be applied by default if not passed. If the provided value exceeds the maximum allowed value a validation error will be thrown
     */
    'limit'?: number;
    'offset'?: number;
    'totalCount'?: boolean;
    /**
     * Include cursor headers in response. Cursor keys built from orderBy clause
     */
    'cursor'?: boolean;
    /**
     * Cursor for forward pagination. List objects after this cursor position
     */
    'startAfter'?: string;
    /**
     * Cursor for backward pagination. List objects before this cursor position
     */
    'endBefore'?: string;
    'fields'?: Array<'chatId' | 'content' | 'createdAt' | 'id' | 'userId'>;
    'where.chatId.eq'?: number;
    'where.chatId.neq'?: number;
    'where.chatId.gt'?: number;
    'where.chatId.gte'?: number;
    'where.chatId.lt'?: number;
    'where.chatId.lte'?: number;
    'where.chatId.like'?: number;
    'where.chatId.ilike'?: number;
    'where.chatId.in'?: string;
    'where.chatId.nin'?: string;
    'where.chatId.contains'?: string;
    'where.chatId.contained'?: string;
    'where.chatId.overlaps'?: string;
    'where.content.eq'?: string;
    'where.content.neq'?: string;
    'where.content.gt'?: string;
    'where.content.gte'?: string;
    'where.content.lt'?: string;
    'where.content.lte'?: string;
    'where.content.like'?: string;
    'where.content.ilike'?: string;
    'where.content.in'?: string;
    'where.content.nin'?: string;
    'where.content.contains'?: string;
    'where.content.contained'?: string;
    'where.content.overlaps'?: string;
    'where.createdAt.eq'?: string;
    'where.createdAt.neq'?: string;
    'where.createdAt.gt'?: string;
    'where.createdAt.gte'?: string;
    'where.createdAt.lt'?: string;
    'where.createdAt.lte'?: string;
    'where.createdAt.like'?: string;
    'where.createdAt.ilike'?: string;
    'where.createdAt.in'?: string;
    'where.createdAt.nin'?: string;
    'where.createdAt.contains'?: string;
    'where.createdAt.contained'?: string;
    'where.createdAt.overlaps'?: string;
    'where.id.eq'?: number;
    'where.id.neq'?: number;
    'where.id.gt'?: number;
    'where.id.gte'?: number;
    'where.id.lt'?: number;
    'where.id.lte'?: number;
    'where.id.like'?: number;
    'where.id.ilike'?: number;
    'where.id.in'?: string;
    'where.id.nin'?: string;
    'where.id.contains'?: string;
    'where.id.contained'?: string;
    'where.id.overlaps'?: string;
    'where.userId.eq'?: string;
    'where.userId.neq'?: string;
    'where.userId.gt'?: string;
    'where.userId.gte'?: string;
    'where.userId.lt'?: string;
    'where.userId.lte'?: string;
    'where.userId.like'?: string;
    'where.userId.ilike'?: string;
    'where.userId.in'?: string;
    'where.userId.nin'?: string;
    'where.userId.contains'?: string;
    'where.userId.contained'?: string;
    'where.userId.overlaps'?: string;
    'where.or'?: Array<string>;
    'orderby.chatId'?: 'asc' | 'desc';
    'orderby.content'?: 'asc' | 'desc';
    'orderby.createdAt'?: 'asc' | 'desc';
    'orderby.id'?: 'asc' | 'desc';
    'orderby.userId'?: 'asc' | 'desc';
  }
}

/**
 * Default Response
 */
export type GetMessagesResponseOK = Array<{ 'id'?: number | null; 'userId'?: string | null; 'chatId'?: number | null; 'content'?: string | null; 'createdAt'?: string | null }>
export type GetMessagesResponses =
  FullResponse<GetMessagesResponseOK, 200>

export type CreateMessageRequest = {
  query?: {
    'fields'?: Array<'chatId' | 'content' | 'createdAt' | 'id' | 'userId'>;
  }
  body: {
    'id'?: number;
    'userId': string;
    'chatId': number;
    'content': string;
    'createdAt'?: string | null;
  }
}

/**
 * A Message
 */
export type CreateMessageResponseOK = { 'id'?: number | null; 'userId'?: string | null; 'chatId'?: number | null; 'content'?: string | null; 'createdAt'?: string | null }
export type CreateMessageResponses =
  FullResponse<CreateMessageResponseOK, 200>

export type UpdateMessagesRequest = {
  query?: {
    'fields'?: Array<'chatId' | 'content' | 'createdAt' | 'id' | 'userId'>;
    'where.chatId.eq'?: number;
    'where.chatId.neq'?: number;
    'where.chatId.gt'?: number;
    'where.chatId.gte'?: number;
    'where.chatId.lt'?: number;
    'where.chatId.lte'?: number;
    'where.chatId.like'?: number;
    'where.chatId.ilike'?: number;
    'where.chatId.in'?: string;
    'where.chatId.nin'?: string;
    'where.chatId.contains'?: string;
    'where.chatId.contained'?: string;
    'where.chatId.overlaps'?: string;
    'where.content.eq'?: string;
    'where.content.neq'?: string;
    'where.content.gt'?: string;
    'where.content.gte'?: string;
    'where.content.lt'?: string;
    'where.content.lte'?: string;
    'where.content.like'?: string;
    'where.content.ilike'?: string;
    'where.content.in'?: string;
    'where.content.nin'?: string;
    'where.content.contains'?: string;
    'where.content.contained'?: string;
    'where.content.overlaps'?: string;
    'where.createdAt.eq'?: string;
    'where.createdAt.neq'?: string;
    'where.createdAt.gt'?: string;
    'where.createdAt.gte'?: string;
    'where.createdAt.lt'?: string;
    'where.createdAt.lte'?: string;
    'where.createdAt.like'?: string;
    'where.createdAt.ilike'?: string;
    'where.createdAt.in'?: string;
    'where.createdAt.nin'?: string;
    'where.createdAt.contains'?: string;
    'where.createdAt.contained'?: string;
    'where.createdAt.overlaps'?: string;
    'where.id.eq'?: number;
    'where.id.neq'?: number;
    'where.id.gt'?: number;
    'where.id.gte'?: number;
    'where.id.lt'?: number;
    'where.id.lte'?: number;
    'where.id.like'?: number;
    'where.id.ilike'?: number;
    'where.id.in'?: string;
    'where.id.nin'?: string;
    'where.id.contains'?: string;
    'where.id.contained'?: string;
    'where.id.overlaps'?: string;
    'where.userId.eq'?: string;
    'where.userId.neq'?: string;
    'where.userId.gt'?: string;
    'where.userId.gte'?: string;
    'where.userId.lt'?: string;
    'where.userId.lte'?: string;
    'where.userId.like'?: string;
    'where.userId.ilike'?: string;
    'where.userId.in'?: string;
    'where.userId.nin'?: string;
    'where.userId.contains'?: string;
    'where.userId.contained'?: string;
    'where.userId.overlaps'?: string;
    'where.or'?: Array<string>;
  }
  body: {
    'id'?: number;
    'userId': string;
    'chatId': number;
    'content': string;
    'createdAt'?: string | null;
  }
}

/**
 * Default Response
 */
export type UpdateMessagesResponseOK = Array<{ 'id'?: number | null; 'userId'?: string | null; 'chatId'?: number | null; 'content'?: string | null; 'createdAt'?: string | null }>
export type UpdateMessagesResponses =
  FullResponse<UpdateMessagesResponseOK, 200>

export type GetMessageByIdRequest = {
  path: {
    'id': number;
  }
  query?: {
    'fields'?: Array<'chatId' | 'content' | 'createdAt' | 'id' | 'userId'>;
  }
}

/**
 * A Message
 */
export type GetMessageByIdResponseOK = { 'id'?: number | null; 'userId'?: string | null; 'chatId'?: number | null; 'content'?: string | null; 'createdAt'?: string | null }
export type GetMessageByIdResponses =
  FullResponse<GetMessageByIdResponseOK, 200>

export type UpdateMessageRequest = {
  path: {
    'id': number;
  }
  query?: {
    'fields'?: Array<'chatId' | 'content' | 'createdAt' | 'id' | 'userId'>;
  }
  body: {
    'userId': string;
    'chatId': number;
    'content': string;
    'createdAt'?: string | null;
  }
}

/**
 * A Message
 */
export type UpdateMessageResponseOK = { 'id'?: number | null; 'userId'?: string | null; 'chatId'?: number | null; 'content'?: string | null; 'createdAt'?: string | null }
export type UpdateMessageResponses =
  FullResponse<UpdateMessageResponseOK, 200>

export type DeleteMessagesRequest = {
  path: {
    'id': number;
  }
  query?: {
    'fields'?: Array<'chatId' | 'content' | 'createdAt' | 'id' | 'userId'>;
  }
}

/**
 * A Message
 */
export type DeleteMessagesResponseOK = { 'id'?: number | null; 'userId'?: string | null; 'chatId'?: number | null; 'content'?: string | null; 'createdAt'?: string | null }
export type DeleteMessagesResponses =
  FullResponse<DeleteMessagesResponseOK, 200>

export type GetChatForMessageRequest = {
  path: {
    'id': number;
  }
  query?: {
    'fields'?: Array<'createdAt' | 'id' | 'title' | 'userId'>;
  }
}

/**
 * A Chat
 */
export type GetChatForMessageResponseOK = { 'id'?: number | null; 'userId'?: string | null; 'title'?: string | null; 'createdAt'?: string | null }
export type GetChatForMessageResponses =
  FullResponse<GetChatForMessageResponseOK, 200>

export type GetChatsRequest = {
  query?: {
    /**
     * Limit will be applied by default if not passed. If the provided value exceeds the maximum allowed value a validation error will be thrown
     */
    'limit'?: number;
    'offset'?: number;
    'totalCount'?: boolean;
    /**
     * Include cursor headers in response. Cursor keys built from orderBy clause
     */
    'cursor'?: boolean;
    /**
     * Cursor for forward pagination. List objects after this cursor position
     */
    'startAfter'?: string;
    /**
     * Cursor for backward pagination. List objects before this cursor position
     */
    'endBefore'?: string;
    'fields'?: Array<'createdAt' | 'id' | 'title' | 'userId'>;
    'where.createdAt.eq'?: string;
    'where.createdAt.neq'?: string;
    'where.createdAt.gt'?: string;
    'where.createdAt.gte'?: string;
    'where.createdAt.lt'?: string;
    'where.createdAt.lte'?: string;
    'where.createdAt.like'?: string;
    'where.createdAt.ilike'?: string;
    'where.createdAt.in'?: string;
    'where.createdAt.nin'?: string;
    'where.createdAt.contains'?: string;
    'where.createdAt.contained'?: string;
    'where.createdAt.overlaps'?: string;
    'where.id.eq'?: number;
    'where.id.neq'?: number;
    'where.id.gt'?: number;
    'where.id.gte'?: number;
    'where.id.lt'?: number;
    'where.id.lte'?: number;
    'where.id.like'?: number;
    'where.id.ilike'?: number;
    'where.id.in'?: string;
    'where.id.nin'?: string;
    'where.id.contains'?: string;
    'where.id.contained'?: string;
    'where.id.overlaps'?: string;
    'where.title.eq'?: string;
    'where.title.neq'?: string;
    'where.title.gt'?: string;
    'where.title.gte'?: string;
    'where.title.lt'?: string;
    'where.title.lte'?: string;
    'where.title.like'?: string;
    'where.title.ilike'?: string;
    'where.title.in'?: string;
    'where.title.nin'?: string;
    'where.title.contains'?: string;
    'where.title.contained'?: string;
    'where.title.overlaps'?: string;
    'where.userId.eq'?: string;
    'where.userId.neq'?: string;
    'where.userId.gt'?: string;
    'where.userId.gte'?: string;
    'where.userId.lt'?: string;
    'where.userId.lte'?: string;
    'where.userId.like'?: string;
    'where.userId.ilike'?: string;
    'where.userId.in'?: string;
    'where.userId.nin'?: string;
    'where.userId.contains'?: string;
    'where.userId.contained'?: string;
    'where.userId.overlaps'?: string;
    'where.or'?: Array<string>;
    'orderby.createdAt'?: 'asc' | 'desc';
    'orderby.id'?: 'asc' | 'desc';
    'orderby.title'?: 'asc' | 'desc';
    'orderby.userId'?: 'asc' | 'desc';
  }
}

/**
 * Default Response
 */
export type GetChatsResponseOK = Array<{ 'id'?: number | null; 'userId'?: string | null; 'title'?: string | null; 'createdAt'?: string | null }>
export type GetChatsResponses =
  FullResponse<GetChatsResponseOK, 200>

export type CreateChatRequest = {
  query?: {
    'fields'?: Array<'createdAt' | 'id' | 'title' | 'userId'>;
  }
  body: {
    'id'?: number;
    'userId': string;
    'title': string;
    'createdAt'?: string | null;
  }
}

/**
 * A Chat
 */
export type CreateChatResponseOK = { 'id'?: number | null; 'userId'?: string | null; 'title'?: string | null; 'createdAt'?: string | null }
export type CreateChatResponses =
  FullResponse<CreateChatResponseOK, 200>

export type UpdateChatsRequest = {
  query?: {
    'fields'?: Array<'createdAt' | 'id' | 'title' | 'userId'>;
    'where.createdAt.eq'?: string;
    'where.createdAt.neq'?: string;
    'where.createdAt.gt'?: string;
    'where.createdAt.gte'?: string;
    'where.createdAt.lt'?: string;
    'where.createdAt.lte'?: string;
    'where.createdAt.like'?: string;
    'where.createdAt.ilike'?: string;
    'where.createdAt.in'?: string;
    'where.createdAt.nin'?: string;
    'where.createdAt.contains'?: string;
    'where.createdAt.contained'?: string;
    'where.createdAt.overlaps'?: string;
    'where.id.eq'?: number;
    'where.id.neq'?: number;
    'where.id.gt'?: number;
    'where.id.gte'?: number;
    'where.id.lt'?: number;
    'where.id.lte'?: number;
    'where.id.like'?: number;
    'where.id.ilike'?: number;
    'where.id.in'?: string;
    'where.id.nin'?: string;
    'where.id.contains'?: string;
    'where.id.contained'?: string;
    'where.id.overlaps'?: string;
    'where.title.eq'?: string;
    'where.title.neq'?: string;
    'where.title.gt'?: string;
    'where.title.gte'?: string;
    'where.title.lt'?: string;
    'where.title.lte'?: string;
    'where.title.like'?: string;
    'where.title.ilike'?: string;
    'where.title.in'?: string;
    'where.title.nin'?: string;
    'where.title.contains'?: string;
    'where.title.contained'?: string;
    'where.title.overlaps'?: string;
    'where.userId.eq'?: string;
    'where.userId.neq'?: string;
    'where.userId.gt'?: string;
    'where.userId.gte'?: string;
    'where.userId.lt'?: string;
    'where.userId.lte'?: string;
    'where.userId.like'?: string;
    'where.userId.ilike'?: string;
    'where.userId.in'?: string;
    'where.userId.nin'?: string;
    'where.userId.contains'?: string;
    'where.userId.contained'?: string;
    'where.userId.overlaps'?: string;
    'where.or'?: Array<string>;
  }
  body: {
    'id'?: number;
    'userId': string;
    'title': string;
    'createdAt'?: string | null;
  }
}

/**
 * Default Response
 */
export type UpdateChatsResponseOK = Array<{ 'id'?: number | null; 'userId'?: string | null; 'title'?: string | null; 'createdAt'?: string | null }>
export type UpdateChatsResponses =
  FullResponse<UpdateChatsResponseOK, 200>

export type GetChatByIdRequest = {
  path: {
    'id': number;
  }
  query?: {
    'fields'?: Array<'createdAt' | 'id' | 'title' | 'userId'>;
  }
}

/**
 * A Chat
 */
export type GetChatByIdResponseOK = { 'id'?: number | null; 'userId'?: string | null; 'title'?: string | null; 'createdAt'?: string | null }
export type GetChatByIdResponses =
  FullResponse<GetChatByIdResponseOK, 200>

export type UpdateChatRequest = {
  path: {
    'id': number;
  }
  query?: {
    'fields'?: Array<'createdAt' | 'id' | 'title' | 'userId'>;
  }
  body: {
    'userId': string;
    'title': string;
    'createdAt'?: string | null;
  }
}

/**
 * A Chat
 */
export type UpdateChatResponseOK = { 'id'?: number | null; 'userId'?: string | null; 'title'?: string | null; 'createdAt'?: string | null }
export type UpdateChatResponses =
  FullResponse<UpdateChatResponseOK, 200>

export type DeleteChatsRequest = {
  path: {
    'id': number;
  }
  query?: {
    'fields'?: Array<'createdAt' | 'id' | 'title' | 'userId'>;
  }
}

/**
 * A Chat
 */
export type DeleteChatsResponseOK = { 'id'?: number | null; 'userId'?: string | null; 'title'?: string | null; 'createdAt'?: string | null }
export type DeleteChatsResponses =
  FullResponse<DeleteChatsResponseOK, 200>

export type GetMessagesForChatRequest = {
  path: {
    'id': number;
  }
  query?: {
    /**
     * Limit will be applied by default if not passed. If the provided value exceeds the maximum allowed value a validation error will be thrown
     */
    'limit'?: number;
    'offset'?: number;
    'fields'?: Array<'chatId' | 'content' | 'createdAt' | 'id' | 'userId'>;
    'totalCount'?: boolean;
  }
}

/**
 * Default Response
 */
export type GetMessagesForChatResponseOK = Array<{ 'id'?: number | null; 'userId'?: string | null; 'chatId'?: number | null; 'content'?: string | null; 'createdAt'?: string | null }>
export type GetMessagesForChatResponses =
  FullResponse<GetMessagesForChatResponseOK, 200>


export function generateMemoriesClient(opts: PlatformaticClientOptions): Promise<Memories>;
export default generateMemoriesClient;
