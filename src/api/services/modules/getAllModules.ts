import { AxiosResponse } from 'axios'
import { api } from 'api'
import type { Module } from 'api/types'

export const getAllModulesService = async () => {
  const { data }: AxiosResponse<Module[]> = await api.get(`/modules`)

  return data
}
