import { buildOpenAPIClient } from 'massimo'
import { join } from 'node:path'

export async function generateMemoriesClient (opts) {
  return buildOpenAPIClient({
    type: 'openapi',
    name: 'memories',
    path: join(import.meta.dirname, 'memories.openapi.json'),
    url: opts.url,
    serviceId: opts.serviceId,
    throwOnError: opts.throwOnError,
    fullResponse: true,
    fullRequest: true,
    validateResponse: false,
    getHeaders: opts.getHeaders
  })
}

export default generateMemoriesClient
