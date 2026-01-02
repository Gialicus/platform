import { type FastifyInstance, type FastifyPluginOptions } from 'fastify'
import z from 'zod';

export default async function (fastify: FastifyInstance, opts: FastifyPluginOptions) {

  const agentIdSchema = z.object({
    agentId: z.string(),
  });

  fastify.get('/:agentId', async (request, _reply) => {
    const { agentId } = agentIdSchema.parse(request.params);
    const agent = await fastify.agentLoader.getAgentById(agentId);
    const { response } = await agent.generate({
      prompt: 'What is the recipe for a pizza margherita?',
    })
    return response
  });

  fastify.get('/:agentId/stream', async (request, _reply) => {
    const { agentId } = agentIdSchema.parse(request.params);
    const agent = await fastify.agentLoader.getAgentById(agentId);
    const response = await agent.stream({
      prompt: 'What is the recipe for a pizza margherita?',
    })
    return response.toUIMessageStreamResponse()
  });
}
