"use client";

import { DeleteAgentsConfigsRequest, GetAgentsConfigsResponseOK, UpdateAgentsConfigRequest } from '@/client/api-types';
import { createAgentsConfig, deleteAgentsConfigs, getAgentsConfigs, setBaseUrl, updateAgentsConfig } from '@/client/api.mjs'
import { useState, useEffect } from 'react'
import CreateAgentsConfigForm from './CreateAgentsConfigForm';
import AgentsConfigTable from './AgentsConfigTable';
import EditAgentsConfigModal from './EditAgentsConfigModal';

setBaseUrl("http://localhost:3042/agents_configs");

type UpdateAgentConfig = UpdateAgentsConfigRequest['body'] & UpdateAgentsConfigRequest['path'];

export default function AgentsConfigs () {
  const [agentsConfigs, setAgentsConfigs] = useState<GetAgentsConfigsResponseOK>([])
  const [editAgentConfig, setEditAgentConfig] = useState<UpdateAgentConfig | null>(null)
  const [showEditModal, setShowEditModal] = useState(false)

  useEffect(() => {
    fetchAgentsConfigs()
  }, [])

  const fetchAgentsConfigs = async () => {
    try {
      const response = await getAgentsConfigs({})
      setAgentsConfigs(response.body)
    } catch (error) {
      console.error('Error fetching agents configs:', error)
    }
  }

  const handleCreateAgentsConfig = async (data: { name: string; instructions: string; model: string }) => {
    try {
      await createAgentsConfig({ body: data })
      fetchAgentsConfigs()
    } catch (error) {
      console.error('Error creating agents config:', error)
    }
  }

  const handleEditAgentsConfig = async (config: UpdateAgentConfig) => {
    try {
      await updateAgentsConfig({ path: { id: config.id }, body: config })
      setShowEditModal(false)
      setEditAgentConfig(null)
      fetchAgentsConfigs()
    } catch (error) {
      console.error('Error updating agents config:', error)
    }
  }

  const handleDeleteAgentsConfig = async (id: DeleteAgentsConfigsRequest['path']['id']) => {
    try {
      await deleteAgentsConfigs({ path: { id } })
      fetchAgentsConfigs()
    } catch (error) {
      console.error('Error deleting agents config:', error)
    }
  }

  const handleEditClick = (config: GetAgentsConfigsResponseOK[0]) => {
    setEditAgentConfig({ 
      id: config.id ?? 0, 
      name: config.name ?? '', 
      instructions: config.instructions ?? '', 
      model: config.model ?? '' 
    })
    setShowEditModal(true)
  }

  const handleCancelEdit = () => {
    setShowEditModal(false)
    setEditAgentConfig(null)
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-gray-900 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-white">Agents Configs Management</h1>

        <CreateAgentsConfigForm onSubmit={handleCreateAgentsConfig} />

        <AgentsConfigTable 
          configs={agentsConfigs}
          onEdit={handleEditClick}
          onDelete={handleDeleteAgentsConfig}
        />

        <EditAgentsConfigModal
          config={editAgentConfig}
          isOpen={showEditModal}
          onSave={handleEditAgentsConfig}
          onCancel={handleCancelEdit}
        />
      </div>
    </div>
  )
}
