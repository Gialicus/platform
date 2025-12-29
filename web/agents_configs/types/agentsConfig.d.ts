/**
 * AgentsConfig
 * A AgentsConfig
 */
export interface AgentsConfig {
  id?: number;
  createdAt?: string | null;
  instructions: string;
  model: string;
  name: string;
  updatedAt?: string | null;
}