import { buildOpenAPIClient } from 'massimo'
import { join } from 'node:path'

export async function generateAgentsConfigsClient (opts) {
  return buildOpenAPIClient({
    type: 'openapi',
    name: 'agentsConfigs',
    path: join(import.meta.dirname, 'agents_configs.openapi.json'),
    url: opts.url,
    serviceId: opts.serviceId,
    throwOnError: opts.throwOnError,
    fullResponse: true,
    fullRequest: true,
    validateResponse: false,
    getHeaders: opts.getHeaders
  })
}

export default generateAgentsConfigsClient
