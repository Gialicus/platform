"use client";

import { GetAgentsConfigsResponseOK } from '@/client/api-types';
import AgentsConfigRow from './AgentsConfigRow';

type AgentsConfigTableProps = {
  configs: GetAgentsConfigsResponseOK;
  onEdit: (config: GetAgentsConfigsResponseOK[0]) => void;
  onDelete: (id: number) => void;
};

export default function AgentsConfigTable({ configs, onEdit, onDelete }: AgentsConfigTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Instructions
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Model
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-900 divide-y divide-gray-700">
          {configs.map(agentConfig => (
            <AgentsConfigRow
              key={agentConfig.id}
              config={agentConfig}
              onEdit={() => onEdit(agentConfig)}
              onDelete={() => agentConfig.id && onDelete(agentConfig.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

