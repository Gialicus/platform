export interface FullResponse<T, U extends number> {
  'statusCode': U;
  'headers': object;
  'body': T;
}

export type GetAgentsConfigsRequest = {
  query?: {
    /**
     * Limit will be applied by default if not passed. If the provided value exceeds the maximum allowed value a validation error will be thrown
     */
    'limit'?: number;
    'offset'?: number;
    'totalCount'?: boolean;
    /**
     * Include cursor headers in response. Cursor keys built from orderBy clause
     */
    'cursor'?: boolean;
    /**
     * Cursor for forward pagination. List objects after this cursor position
     */
    'startAfter'?: string;
    /**
     * Cursor for backward pagination. List objects before this cursor position
     */
    'endBefore'?: string;
    'fields'?: Array<'createdAt' | 'id' | 'instructions' | 'model' | 'name' | 'updatedAt'>;
    'where.createdAt.eq'?: string;
    'where.createdAt.neq'?: string;
    'where.createdAt.gt'?: string;
    'where.createdAt.gte'?: string;
    'where.createdAt.lt'?: string;
    'where.createdAt.lte'?: string;
    'where.createdAt.like'?: string;
    'where.createdAt.ilike'?: string;
    'where.createdAt.in'?: string;
    'where.createdAt.nin'?: string;
    'where.createdAt.contains'?: string;
    'where.createdAt.contained'?: string;
    'where.createdAt.overlaps'?: string;
    'where.id.eq'?: number;
    'where.id.neq'?: number;
    'where.id.gt'?: number;
    'where.id.gte'?: number;
    'where.id.lt'?: number;
    'where.id.lte'?: number;
    'where.id.like'?: number;
    'where.id.ilike'?: number;
    'where.id.in'?: string;
    'where.id.nin'?: string;
    'where.id.contains'?: string;
    'where.id.contained'?: string;
    'where.id.overlaps'?: string;
    'where.instructions.eq'?: string;
    'where.instructions.neq'?: string;
    'where.instructions.gt'?: string;
    'where.instructions.gte'?: string;
    'where.instructions.lt'?: string;
    'where.instructions.lte'?: string;
    'where.instructions.like'?: string;
    'where.instructions.ilike'?: string;
    'where.instructions.in'?: string;
    'where.instructions.nin'?: string;
    'where.instructions.contains'?: string;
    'where.instructions.contained'?: string;
    'where.instructions.overlaps'?: string;
    'where.model.eq'?: string;
    'where.model.neq'?: string;
    'where.model.gt'?: string;
    'where.model.gte'?: string;
    'where.model.lt'?: string;
    'where.model.lte'?: string;
    'where.model.like'?: string;
    'where.model.ilike'?: string;
    'where.model.in'?: string;
    'where.model.nin'?: string;
    'where.model.contains'?: string;
    'where.model.contained'?: string;
    'where.model.overlaps'?: string;
    'where.name.eq'?: string;
    'where.name.neq'?: string;
    'where.name.gt'?: string;
    'where.name.gte'?: string;
    'where.name.lt'?: string;
    'where.name.lte'?: string;
    'where.name.like'?: string;
    'where.name.ilike'?: string;
    'where.name.in'?: string;
    'where.name.nin'?: string;
    'where.name.contains'?: string;
    'where.name.contained'?: string;
    'where.name.overlaps'?: string;
    'where.updatedAt.eq'?: string;
    'where.updatedAt.neq'?: string;
    'where.updatedAt.gt'?: string;
    'where.updatedAt.gte'?: string;
    'where.updatedAt.lt'?: string;
    'where.updatedAt.lte'?: string;
    'where.updatedAt.like'?: string;
    'where.updatedAt.ilike'?: string;
    'where.updatedAt.in'?: string;
    'where.updatedAt.nin'?: string;
    'where.updatedAt.contains'?: string;
    'where.updatedAt.contained'?: string;
    'where.updatedAt.overlaps'?: string;
    'where.or'?: Array<string>;
    'orderby.createdAt'?: 'asc' | 'desc';
    'orderby.id'?: 'asc' | 'desc';
    'orderby.instructions'?: 'asc' | 'desc';
    'orderby.model'?: 'asc' | 'desc';
    'orderby.name'?: 'asc' | 'desc';
    'orderby.updatedAt'?: 'asc' | 'desc';
  }
}

/**
 * Default Response
 */
export type GetAgentsConfigsResponseOK = Array<{ 'id'?: number | null; 'name'?: string | null; 'instructions'?: string | null; 'model'?: string | null; 'createdAt'?: string | null; 'updatedAt'?: string | null }>
export type GetAgentsConfigsResponses =
  FullResponse<GetAgentsConfigsResponseOK, 200>

export type CreateAgentsConfigRequest = {
  query?: {
    'fields'?: Array<'createdAt' | 'id' | 'instructions' | 'model' | 'name' | 'updatedAt'>;
  }
  body: {
    'id'?: number;
    'name': string;
    'instructions': string;
    'model': string;
    'createdAt'?: string | null;
    'updatedAt'?: string | null;
  }
}

/**
 * A AgentsConfig
 */
export type CreateAgentsConfigResponseOK = { 'id'?: number | null; 'name'?: string | null; 'instructions'?: string | null; 'model'?: string | null; 'createdAt'?: string | null; 'updatedAt'?: string | null }
export type CreateAgentsConfigResponses =
  FullResponse<CreateAgentsConfigResponseOK, 200>

export type UpdateAgentsConfigsRequest = {
  query?: {
    'fields'?: Array<'createdAt' | 'id' | 'instructions' | 'model' | 'name' | 'updatedAt'>;
    'where.createdAt.eq'?: string;
    'where.createdAt.neq'?: string;
    'where.createdAt.gt'?: string;
    'where.createdAt.gte'?: string;
    'where.createdAt.lt'?: string;
    'where.createdAt.lte'?: string;
    'where.createdAt.like'?: string;
    'where.createdAt.ilike'?: string;
    'where.createdAt.in'?: string;
    'where.createdAt.nin'?: string;
    'where.createdAt.contains'?: string;
    'where.createdAt.contained'?: string;
    'where.createdAt.overlaps'?: string;
    'where.id.eq'?: number;
    'where.id.neq'?: number;
    'where.id.gt'?: number;
    'where.id.gte'?: number;
    'where.id.lt'?: number;
    'where.id.lte'?: number;
    'where.id.like'?: number;
    'where.id.ilike'?: number;
    'where.id.in'?: string;
    'where.id.nin'?: string;
    'where.id.contains'?: string;
    'where.id.contained'?: string;
    'where.id.overlaps'?: string;
    'where.instructions.eq'?: string;
    'where.instructions.neq'?: string;
    'where.instructions.gt'?: string;
    'where.instructions.gte'?: string;
    'where.instructions.lt'?: string;
    'where.instructions.lte'?: string;
    'where.instructions.like'?: string;
    'where.instructions.ilike'?: string;
    'where.instructions.in'?: string;
    'where.instructions.nin'?: string;
    'where.instructions.contains'?: string;
    'where.instructions.contained'?: string;
    'where.instructions.overlaps'?: string;
    'where.model.eq'?: string;
    'where.model.neq'?: string;
    'where.model.gt'?: string;
    'where.model.gte'?: string;
    'where.model.lt'?: string;
    'where.model.lte'?: string;
    'where.model.like'?: string;
    'where.model.ilike'?: string;
    'where.model.in'?: string;
    'where.model.nin'?: string;
    'where.model.contains'?: string;
    'where.model.contained'?: string;
    'where.model.overlaps'?: string;
    'where.name.eq'?: string;
    'where.name.neq'?: string;
    'where.name.gt'?: string;
    'where.name.gte'?: string;
    'where.name.lt'?: string;
    'where.name.lte'?: string;
    'where.name.like'?: string;
    'where.name.ilike'?: string;
    'where.name.in'?: string;
    'where.name.nin'?: string;
    'where.name.contains'?: string;
    'where.name.contained'?: string;
    'where.name.overlaps'?: string;
    'where.updatedAt.eq'?: string;
    'where.updatedAt.neq'?: string;
    'where.updatedAt.gt'?: string;
    'where.updatedAt.gte'?: string;
    'where.updatedAt.lt'?: string;
    'where.updatedAt.lte'?: string;
    'where.updatedAt.like'?: string;
    'where.updatedAt.ilike'?: string;
    'where.updatedAt.in'?: string;
    'where.updatedAt.nin'?: string;
    'where.updatedAt.contains'?: string;
    'where.updatedAt.contained'?: string;
    'where.updatedAt.overlaps'?: string;
    'where.or'?: Array<string>;
  }
  body: {
    'id'?: number;
    'name': string;
    'instructions': string;
    'model': string;
    'createdAt'?: string | null;
    'updatedAt'?: string | null;
  }
}

/**
 * Default Response
 */
export type UpdateAgentsConfigsResponseOK = Array<{ 'id'?: number | null; 'name'?: string | null; 'instructions'?: string | null; 'model'?: string | null; 'createdAt'?: string | null; 'updatedAt'?: string | null }>
export type UpdateAgentsConfigsResponses =
  FullResponse<UpdateAgentsConfigsResponseOK, 200>

export type GetAgentsConfigByIdRequest = {
  path: {
    'id': number;
  }
  query?: {
    'fields'?: Array<'createdAt' | 'id' | 'instructions' | 'model' | 'name' | 'updatedAt'>;
  }
}

/**
 * A AgentsConfig
 */
export type GetAgentsConfigByIdResponseOK = { 'id'?: number | null; 'name'?: string | null; 'instructions'?: string | null; 'model'?: string | null; 'createdAt'?: string | null; 'updatedAt'?: string | null }
export type GetAgentsConfigByIdResponses =
  FullResponse<GetAgentsConfigByIdResponseOK, 200>

export type UpdateAgentsConfigRequest = {
  path: {
    'id': number;
  }
  query?: {
    'fields'?: Array<'createdAt' | 'id' | 'instructions' | 'model' | 'name' | 'updatedAt'>;
  }
  body: {
    'name': string;
    'instructions': string;
    'model': string;
    'createdAt'?: string | null;
    'updatedAt'?: string | null;
  }
}

/**
 * A AgentsConfig
 */
export type UpdateAgentsConfigResponseOK = { 'id'?: number | null; 'name'?: string | null; 'instructions'?: string | null; 'model'?: string | null; 'createdAt'?: string | null; 'updatedAt'?: string | null }
export type UpdateAgentsConfigResponses =
  FullResponse<UpdateAgentsConfigResponseOK, 200>

export type DeleteAgentsConfigsRequest = {
  path: {
    'id': number;
  }
  query?: {
    'fields'?: Array<'createdAt' | 'id' | 'instructions' | 'model' | 'name' | 'updatedAt'>;
  }
}

/**
 * A AgentsConfig
 */
export type DeleteAgentsConfigsResponseOK = { 'id'?: number | null; 'name'?: string | null; 'instructions'?: string | null; 'model'?: string | null; 'createdAt'?: string | null; 'updatedAt'?: string | null }
export type DeleteAgentsConfigsResponses =
  FullResponse<DeleteAgentsConfigsResponseOK, 200>

export type GetExampleRequest = {
  
}

export type GetExampleResponseOK = unknown
export type GetExampleResponses =
  FullResponse<GetExampleResponseOK, 200>



export interface Api {
  setBaseUrl(newUrl: string): void;
  setDefaultHeaders(headers: object): void;
  setDefaultFetchParams(fetchParams: RequestInit): void;
  /**
   * Get agentsConfigs.
   *
   * Fetch agentsConfigs from the database.
   * @param req - request parameters object
   * @returns the API response
   */
  getAgentsConfigs(req: GetAgentsConfigsRequest): Promise<GetAgentsConfigsResponses>;
  /**
   * Create agentsConfig.
   *
   * Add new agentsConfig to the database.
   * @param req - request parameters object
   * @returns the API response
   */
  createAgentsConfig(req: CreateAgentsConfigRequest): Promise<CreateAgentsConfigResponses>;
  /**
   * Update agentsConfigs.
   *
   * Update one or more agentsConfigs in the database.
   * @param req - request parameters object
   * @returns the API response
   */
  updateAgentsConfigs(req: UpdateAgentsConfigsRequest): Promise<UpdateAgentsConfigsResponses>;
  /**
   * Get AgentsConfig by id.
   *
   * Fetch AgentsConfig using its id from the database.
   * @param req - request parameters object
   * @returns the API response
   */
  getAgentsConfigById(req: GetAgentsConfigByIdRequest): Promise<GetAgentsConfigByIdResponses>;
  /**
   * Update agentsConfig.
   *
   * Update agentsConfig in the database.
   * @param req - request parameters object
   * @returns the API response
   */
  updateAgentsConfig(req: UpdateAgentsConfigRequest): Promise<UpdateAgentsConfigResponses>;
  /**
   * Delete agentsConfigs.
   *
   * Delete one or more agentsConfigs from the Database.
   * @param req - request parameters object
   * @returns the API response
   */
  deleteAgentsConfigs(req: DeleteAgentsConfigsRequest): Promise<DeleteAgentsConfigsResponses>;
  /**
   * @param req - request parameters object
   * @returns the API response
   */
  getExample(req: GetExampleRequest): Promise<GetExampleResponses>;
}
type PlatformaticFrontendClient = Omit<Api, 'setBaseUrl'>
type BuildOptions = {
  headers?: object
}
export default function build(url: string, options?: BuildOptions): PlatformaticFrontendClient
