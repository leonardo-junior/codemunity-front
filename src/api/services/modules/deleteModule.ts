import { AxiosResponse } from 'axios'
import { api } from 'api'
import type { Module } from 'api/types'

export const deleteModuleService = async (moduleId: string) => {
  const { data }: AxiosResponse<Module> = await api.delete(`/modules/${moduleId}`)

  return data
}
