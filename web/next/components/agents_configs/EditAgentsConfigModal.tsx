"use client";

import { useState, useEffect } from 'react';
import { UpdateAgentsConfigRequest } from '@/client/api-types';

type UpdateAgentConfig = UpdateAgentsConfigRequest['body'] & UpdateAgentsConfigRequest['path'];

type EditAgentsConfigModalProps = {
  config: UpdateAgentConfig | null;
  isOpen: boolean;
  onSave: (config: UpdateAgentConfig) => void;
  onCancel: () => void;
};

export default function EditAgentsConfigModal({ config, isOpen, onSave, onCancel }: EditAgentsConfigModalProps) {
  const [name, setName] = useState('');
  const [instructions, setInstructions] = useState('');
  const [model, setModel] = useState('');

  useEffect(() => {
    if (config) {
      setName(config.name ?? '');
      setInstructions(config.instructions ?? '');
      setModel(config.model ?? '');
    }
  }, [config]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (config && name.trim() && instructions.trim() && model.trim()) {
      onSave({
        ...config,
        name,
        instructions,
        model,
      });
    }
  };

  if (!isOpen || !config) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-white">Edit Agents Config</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full px-4 py-2 mb-4 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            required
          />
          <textarea
            placeholder="Instructions"
            value={instructions}
            onChange={e => setInstructions(e.target.value)}
            className="w-full px-4 py-2 mb-4 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px] placeholder-gray-400"
            required
          />
          <input
            type="text"
            placeholder="Model"
            value={model}
            onChange={e => setModel(e.target.value)}
            className="w-full px-4 py-2 mb-4 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            required
          />
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

