import { type FastifyInstance, type FastifyPluginOptions } from 'fastify'
import type { AgentsConfigs } from '../../../clients/agents_configs/agents_configs.d'
import { buildOpenAPIClient } from 'massimo'
import { resolve } from 'node:path'
import z from 'zod'
import { ToolLoopAgent } from 'ai'
import { google } from '@ai-sdk/google'


interface AgentLoader {
    getAgentById(id: string): Promise<ToolLoopAgent>;
}

declare module 'fastify' {
    interface FastifyInstance {
        agentLoader: AgentLoader;
    }
}

const parseProvider = (provider: string) => {
    const [providerName, modelName] = provider.split('/')
    switch (providerName) {
        case 'google':
            return google(modelName);
        default:
            throw new Error(`Provider ${provider} not supported`);
    }
}


export default async function (fastify: FastifyInstance, opts: FastifyPluginOptions) {

    const client = await buildOpenAPIClient<AgentsConfigs>({
        url: 'http://agents_configs.plt.local',
        path: resolve(process.cwd(), 'clients/agents_configs/agents_configs.openapi.json')
    });

    const getAgentsConfigById = async (id: string): Promise<ToolLoopAgent> => {
        const response = await client.getAgentsConfigById({ path: { id: parseInt(id) } });
        const agentConfig = z.object({
            id: z.number(),
            name: z.string(),
            instructions: z.string(),
            model: z.string(),
            createdAt: z.string(),
        }).parse(response.body);
        return new ToolLoopAgent({
            id: agentConfig.name,
            model: parseProvider(agentConfig.model),
            instructions: agentConfig.instructions,
        });
    };

    fastify.decorate('agentLoader', {
        getAgentById: getAgentsConfigById,
    });

}