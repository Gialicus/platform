"use client";

import { useState } from 'react';

type CreateAgentsConfigFormProps = {
  onSubmit: (data: { name: string; instructions: string; model: string }) => void;
};

export default function CreateAgentsConfigForm({ onSubmit }: CreateAgentsConfigFormProps) {
  const [name, setName] = useState('');
  const [instructions, setInstructions] = useState('');
  const [model, setModel] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim() && instructions.trim() && model.trim()) {
      onSubmit({ name, instructions, model });
      setName('');
      setInstructions('');
      setModel('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 space-y-4">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Enter agents config name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          required
        />
        <input
          type="text"
          placeholder="Enter model"
          value={model}
          onChange={e => setModel(e.target.value)}
          className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Agents Config
        </button>
      </div>
      <textarea
        placeholder="Enter instructions"
        value={instructions}
        onChange={e => setInstructions(e.target.value)}
        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px] placeholder-gray-400"
        required
      />
    </form>
  );
}

