import { AxiosResponse } from 'axios'
import { api } from 'api'
import type { Module } from 'api/types'

export const getModuleById = async (moduleId: string) => {
  const { data }: AxiosResponse<Module> = await api.get(`/modules/${moduleId}`)

  return data
}
