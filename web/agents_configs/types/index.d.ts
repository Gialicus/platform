import { Entity, EntityHooks, Entities as DatabaseEntities, PlatformaticDatabaseConfig, PlatformaticDatabaseMixin } from '@platformatic/db'
import { PlatformaticApplication, PlatformaticServiceConfig } from '@platformatic/service'
import { type FastifyInstance } from 'fastify'

import { type AgentsConfig } from './agentsConfig.ts'

export { type AgentsConfig } from './agentsConfig.ts'

export interface Entities extends DatabaseEntities {
  agentsConfig: Entity<AgentsConfig>
}

export interface EntityTypes {
  agentsConfig: AgentsConfig
}

export interface EntitiesHooks {
  addEntityHooks(entityName: 'agentsConfig', hooks: EntityHooks<AgentsConfig>): any
}

export interface SchemaGetters {
  getSchema(schemaId: 'agentsConfig'): {
    '$id': string,
    title: string,
    description: string,
    type: string,
    properties: { [x in keyof AgentsConfig]: { type: string, nullable?: boolean } },
    required: string[]
  }
}

export type ServerInstance<Configuration = PlatformaticDatabaseConfig> = FastifyInstance & {
  platformatic: PlatformaticApplication<Configuration> & PlatformaticDatabaseMixin<Entities> & EntitiesHooks & SchemaGetters
}
