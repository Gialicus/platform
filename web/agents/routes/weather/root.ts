import { google } from "@ai-sdk/google";
import { tool, ToolLoopAgent } from "ai";
import { type FastifyInstance, type FastifyPluginOptions } from 'fastify'
import z from "zod";

export default async function (fastify: FastifyInstance, opts: FastifyPluginOptions) {
  const agent =  new ToolLoopAgent({
    model: google("gemini-3-flash-preview"),
    instructions: "You are a helpful assistant that can answer questions and help with tasks.",
    tools: {
        get_weather: tool({
            description: "Get the weather for a given location",
            inputSchema: z.object({ location: z.string() }),
            execute: async ({ location }) => {
                return { weather: "sunny" }
            }
        })
    }
  });

  fastify.get('/', async (request, reply) => {
    const response = await agent.stream({
        prompt: 'What is the weather in Rome?',
    });    
    return response.toUIMessageStreamResponse() 
  })
}