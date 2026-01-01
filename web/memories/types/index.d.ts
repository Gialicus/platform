import { Entity, EntityHooks, Entities as DatabaseEntities, PlatformaticDatabaseConfig, PlatformaticDatabaseMixin } from '@platformatic/db'
import { PlatformaticApplication, PlatformaticServiceConfig } from '@platformatic/service'
import { type FastifyInstance } from 'fastify'

import { type Chat } from './chat.ts'
import { type Message } from './message.ts'

export { type Chat } from './chat.ts'
export { type Message } from './message.ts'

export interface Entities extends DatabaseEntities {
  chat: Entity<Chat>
  message: Entity<Message>
}

export interface EntityTypes {
  chat: Chat
  message: Message
}

export interface EntitiesHooks {
  addEntityHooks(entityName: 'chat', hooks: EntityHooks<Chat>): any
  addEntityHooks(entityName: 'message', hooks: EntityHooks<Message>): any
}

export interface SchemaGetters {
  getSchema(schemaId: 'chat'): {
    '$id': string,
    title: string,
    description: string,
    type: string,
    properties: { [x in keyof Chat]: { type: string, nullable?: boolean } },
    required: string[]
  }

getSchema(schemaId: 'message'): {
    '$id': string,
    title: string,
    description: string,
    type: string,
    properties: { [x in keyof Message]: { type: string, nullable?: boolean } },
    required: string[]
  }
}

export type ServerInstance<Configuration = PlatformaticDatabaseConfig> = FastifyInstance & {
  platformatic: PlatformaticApplication<Configuration> & PlatformaticDatabaseMixin<Entities> & EntitiesHooks & SchemaGetters
}
