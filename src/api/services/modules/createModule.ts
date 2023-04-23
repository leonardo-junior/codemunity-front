import { AxiosResponse } from 'axios'
import { api } from 'api'
import type { Module } from 'api/types'

export const createModuleService = async (values: Partial<Pick<Module, 'courseId' | 'name'>>) => {
  const { data }: AxiosResponse<Module> = await api.post(`/modules`, values)

  return data
}
