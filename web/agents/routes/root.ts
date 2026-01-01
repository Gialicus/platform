import { google } from '@ai-sdk/google';
import { generateText } from 'ai';
import { type FastifyInstance, type FastifyPluginOptions } from 'fastify'

declare module 'fastify' {
  interface FastifyInstance {
    example: string
  }
}

export default async function (fastify: FastifyInstance, opts: FastifyPluginOptions) {
  fastify.get('/example', async (request, reply) => {
    const { text } = await generateText({
      model: google("gemini-3-flash-preview"),
      prompt: "What is love?",
    });
    return { hello: text }
  })
}
