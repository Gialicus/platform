"use client";

import { GetAgentsConfigsResponseOK } from '@/client/api-types';

type AgentsConfigRowProps = {
  config: GetAgentsConfigsResponseOK[0];
  onEdit: () => void;
  onDelete: () => void;
};

export default function AgentsConfigRow({ config, onEdit, onDelete }: AgentsConfigRowProps) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">{config.id ?? '-'}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">{config.name ?? '-'}</td>
      <td className="px-6 py-4 text-sm text-gray-100 max-w-xs truncate">{config.instructions ?? '-'}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">{config.model ?? '-'}</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button
          onClick={onEdit}
          className="text-blue-400 hover:text-blue-300 mr-4"
        >
          Edit
        </button>
        <button 
          onClick={onDelete} 
          className="text-red-400 hover:text-red-300"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

