import { AxiosResponse } from 'axios'
import { api } from 'api'
import type { Module } from 'api/types'

export const updateModuleService = async (
  moduleId: string,
  values: Partial<Pick<Module, 'courseId' | 'name' | 'lessons'>>
) => {
  const { data }: AxiosResponse<Module> = await api.put(`/modules/${moduleId}`, values)

  return data
}
