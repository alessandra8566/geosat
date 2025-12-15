import { BookFormSchemaType } from '@/utils/schema'
import request from './request'

export const apiSendBookDemoEmail = (payload: BookFormSchemaType) => request.post('/api/email', payload)
