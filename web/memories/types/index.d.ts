import { Entity, EntityHooks, Entities as DatabaseEntities, PlatformaticDatabaseConfig, PlatformaticDatabaseMixin } from '@platformatic/db'
import { PlatformaticApplication, PlatformaticServiceConfig } from '@platformatic/service'
import { type FastifyInstance } from 'fastify'

import { type Memory } from './memory.ts'

export { type Memory } from './memory.ts'

export interface Entities extends DatabaseEntities {
  memory: Entity<Memory>
}

export interface EntityTypes {
  memory: Memory
}

export interface EntitiesHooks {
  addEntityHooks(entityName: 'memory', hooks: EntityHooks<Memory>): any
}

export interface SchemaGetters {
  getSchema(schemaId: 'memory'): {
    '$id': string,
    title: string,
    description: string,
    type: string,
    properties: { [x in keyof Memory]: { type: string, nullable?: boolean } },
    required: string[]
  }
}

export type ServerInstance<Configuration = PlatformaticDatabaseConfig> = FastifyInstance & {
  platformatic: PlatformaticApplication<Configuration> & PlatformaticDatabaseMixin<Entities> & EntitiesHooks & SchemaGetters
}
