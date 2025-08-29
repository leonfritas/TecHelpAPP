import api from './api';

export type TicketType = {
  idTicket: number;
  nameTicket: string;
  dateTicket: string;
  idUser: number;  
  description: string;
  idCategory: number;
  status: string;
  nameUser: string;
  nameCategory: string;
};

export const createTicket = async (filters?: { 
  nameTicket?: string | null; 
  description?: string | null; 
  requesterId?: number | null;
  categoryId?: number | null;
  dateTicket?: Date | null;
  status?: string | null 
}) => {
  const response = await api.post<TicketType[]>('/ticket/insert', {
    nameTicket: filters?.nameTicket ?? null,
    description: filters?.description ?? null,
    requesterId: filters?.requesterId ?? null,
    categoryId: filters?.categoryId ?? null,
    dateTicket: filters?.dateTicket ?? null,
    status: filters?.status ?? null,
  });

  return response.data;
};
